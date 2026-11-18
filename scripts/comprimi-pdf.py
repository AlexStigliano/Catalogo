# Alleggerisce un PDF (scheda tecnica, istruzioni) senza cambiarne l'aspetto.
#
#   python3 scripts/comprimi-pdf.py scheda.pdf scheda-leggera.pdf
#
# Serve Python con PyMuPDF e Pillow:  pip install pymupdf pillow
#
# - Toglie i metadati XMP e le miniature delle pagine: testo nascosto che
#   Adobe attacca al documento e a ogni immagine, che in certe schede pesa
#   piu' delle foto.
# - Le foto (immagini JPEG) oltre 220 dpi scendono a 160 dpi, e quelle salvate
#   a qualita' molto alta si ricomprimono a qualita' 80: il nuovo si tiene
#   solo se pesa almeno un quarto in meno. Le foto nei colori di stampa (CMYK)
#   restano CMYK.
# - Testo, disegni, filigrana (PNG) e maschere di trasparenza non si toccano;
#   i font restano solo con i caratteri usati, gli oggetti doppi spariscono.
#
# Poi ogni pagina viene confrontata con l'originale. Se una foto cambia
# luminosita', si rifa' lasciando stare prima le CMYK e poi tutte le foto; se
# cambia il testo, o la luminosita' resta diversa, l'uscita e' una copia
# dell'originale. Conviene tenerla solo se pesa almeno il 15% in meno.
import io, sys, os, shutil, pymupdf
from PIL import Image
if len(sys.argv) != 3:
    sys.exit('Uso: python3 scripts/comprimi-pdf.py ingresso.pdf uscita.pdf')
ingresso, uscita = sys.argv[1], sys.argv[2]
SOGLIA, OBIETTIVO, QUALITA = 220, 160, 80

def comprimi(salta_cmyk, salta_foto=False):
    d = pymupdf.open(ingresso)
    dpi = {}
    for pg in d:
        for im in pg.get_images(full=True):
            xref, w, h = im[0], im[2], im[3]
            for r in pg.get_image_rects(xref):
                if r.width >= 1 and r.height >= 1:
                    dpi[xref] = min(dpi.get(xref, 1e9), w / (r.width / 72), h / (r.height / 72))
    n = 0
    for xref, v in (() if salta_foto else dpi.items()):
        if 'DCTDecode' not in d.xref_get_key(xref, 'Filter')[1]: continue
        cs = d.xref_get_key(xref, 'ColorSpace')[1]
        vecchio = len(d.xref_stream_raw(xref))
        # Colori di stampa (CMYK): si ricomprimono restando CMYK, senza
        # convertirli, con Pillow. Cosi' anche con la trasparenza la resa
        # non cambia.
        if cs == '/DeviceCMYK' and d.xref_get_key(xref, 'Decode')[0] == 'null':
            if salta_cmyk: continue
            try: img = Image.open(io.BytesIO(d.xref_stream(xref) if 'FlateDecode' in d.xref_get_key(xref, 'Filter')[1] else d.xref_stream_raw(xref)))
            except Exception: continue
            if img.mode != 'CMYK': continue
            k = OBIETTIVO / v if v > SOGLIA else 1
            if k < 1: img = img.resize((max(1, round(img.width * k)), max(1, round(img.height * k))), Image.LANCZOS)
            out = io.BytesIO(); img.save(out, 'JPEG', quality=QUALITA, optimize=True)
            nuovo = out.getvalue()
            if len(nuovo) > vecchio * 0.75: continue
            d.update_stream(xref, nuovo, compress=0)
            for chiave, valore in (('Filter', '/DCTDecode'), ('Width', str(img.width)), ('Height', str(img.height)), ('BitsPerComponent', '8'), ('DecodeParms', 'null')):
                d.xref_set_key(xref, chiave, valore)
            n += 1
            continue
        if d.xref_get_key(xref, 'SMask')[0] != 'null' and cs != '/DeviceRGB': continue
        pix = pymupdf.Pixmap(d, xref)
        cmyk = pix.colorspace and pix.colorspace.n == 4
        if cmyk and salta_cmyk: continue
        if pix.alpha: pix = pymupdf.Pixmap(pix, 0)
        if cmyk: pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        k = OBIETTIVO / v if v > SOGLIA else 1
        if k < 1: pix = pymupdf.Pixmap(pix, max(1, round(pix.width * k)), max(1, round(pix.height * k)), None)
        nuovo = pix.tobytes('jpg', jpg_quality=QUALITA)
        if len(nuovo) > vecchio * 0.75: continue
        d.update_stream(xref, nuovo, compress=0)
        for chiave, valore in (('Filter', '/DCTDecode'), ('Width', str(pix.width)), ('Height', str(pix.height)), ('BitsPerComponent', '8'),
                               ('ColorSpace', '/DeviceGray' if pix.colorspace.n == 1 else '/DeviceRGB'), ('Decode', 'null'), ('DecodeParms', 'null')):
            d.xref_set_key(xref, chiave, valore)
        n += 1
    # I metadati XMP (testo nascosto che Adobe attacca al documento e a ogni
    # immagine, spesso con una miniatura) e le miniature delle pagine: non
    # si vedono, ma in alcune schede pesano piu' delle foto.
    for x in range(1, d.xref_length()):
        try:
            for chiave in ('Metadata', 'Thumb', 'PieceInfo'):
                if d.xref_get_key(x, chiave)[0] != 'null': d.xref_set_key(x, chiave, 'null')
        except Exception: pass
    try: d.subset_fonts()
    except Exception: pass
    d.save(uscita, garbage=4, deflate=True, clean=True, use_objstms=1)
    return n

def confronta():
    a, b = pymupdf.open(ingresso), pymupdf.open(uscita)
    if a.page_count != b.page_count: return 'pagine diverse', 99
    peggio = 0
    for i in range(a.page_count):
        if a[i].get_text() != b[i].get_text(): return f'testo diverso a pagina {i + 1}', 99
        pa = a[i].get_pixmap(dpi=40, colorspace=pymupdf.csRGB, alpha=False).samples
        pb = b[i].get_pixmap(dpi=40, colorspace=pymupdf.csRGB, alpha=False).samples
        if len(pa) != len(pb): return f'misura diversa a pagina {i + 1}', 99
        # Differenza con segno: il rumore del ricampionamento si annulla, uno
        # schiarimento o un incupimento no.
        spost = abs(sum(pa) - sum(pb)) / len(pa)
        peggio = max(peggio, spost)
    return 'ok', peggio

esito = ''
for salta, niente in ((False, False), (True, False), (True, True)):
    n = comprimi(salta, niente)
    motivo, spost = confronta()
    if motivo == 'ok' and spost <= 1.0:
        esito = 'foto lasciate tutte' if niente else f'{n} foto' + (' (CMYK lasciate)' if salta else ''); break
else:
    shutil.copyfile(ingresso, uscita)
    esito = f'TENUTO ORIGINALE ({motivo}, spostamento {spost:.1f})'
a, b = os.path.getsize(ingresso), os.path.getsize(uscita)
print(f"{os.path.basename(ingresso)}: {a/1e6:.2f} -> {b/1e6:.2f} MB ({(1-b/a)*100:.0f}% in meno) · {esito}")
