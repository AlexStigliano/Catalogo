import React, { useState, useEffect } from 'react';
import { Heart, Search } from 'lucide-react';
import gocciaImg from './assets/prodotti/goccia.jpeg';

export default function Catalogo() {
  const [products] = useState([
    {
      id: 1,
      nome: 'Goccia',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia in zama/zinco con design classico.',
      immagine: gocciaImg,
      varianti: [
        { codice: '130247B05', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '130247B04', finitura: 'Cromo lucido', versione: 'Patent' },
        { codice: '130247B01', finitura: 'Ottone lucido', versione: 'Patent' },
        { codice: '130247B02O', finitura: 'Ottone satinato', versione: 'Patent' },
        { codice: '130247B43', finitura: 'Bronzo', versione: 'Patent' }
      ],
      dimensioni: '45x45mm (ø 7mm)',
      fornitore: 'Generico'
    },
    {
      id: 2,
      nome: 'Quadra',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia quadrata moderna in zama/zinco.',
      varianti: [
        { codice: '168201B05', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '168201B04', finitura: 'Cromo lucido', versione: 'Patent' },
        { codice: '168201B01', finitura: 'Ottone lucido', versione: 'Patent' }
      ],
      dimensioni: '50x127mm',
      fornitore: 'Generico'
    },
    {
      id: 3,
      nome: 'Angolo',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Alluminio',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia angolare in alluminio con finiture multiple.',
      varianti: [
        { codice: '448RB0880COS', finitura: 'Oro satinato', versione: 'Patent' },
        { codice: '448RB0880CBR', finitura: 'Bronzo', versione: 'Patent' },
        { codice: '448RB0880CCS', finitura: 'Effetto cromo satinato', versione: 'Patent' },
        { codice: '448RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' },
        { codice: '448RB0880CBO', finitura: 'Bianco opaco', versione: 'Patent' }
      ],
      dimensioni: '144x50mm',
      fornitore: 'Generico'
    },
    {
      id: 4,
      nome: 'Round',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Alluminio',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia rotonda elegante in alluminio.',
      varianti: [
        { codice: 'A519RTX59CS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: 'A519RTX59NE', finitura: 'Nero opaco', versione: 'Patent' },
        { codice: 'A519RTX59BO', finitura: 'Bianco opaco', versione: 'Patent' },
        { codice: 'A519RTX59OS', finitura: 'Oro satinato', versione: 'Patent' }
      ],
      dimensioni: '142x50mm (ø 50mm)',
      fornitore: 'Generico'
    },
    {
      id: 5,
      nome: 'Hèlia',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia moderna con design contemporaneo.',
      varianti: [
        { codice: '121RBQCS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '121RBQNE', finitura: 'Nero', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'AD-TECH'
    },
    {
      id: 6,
      nome: 'Volta',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia con design curvo e elegante.',
      varianti: [
        { codice: '122RBTCS', finitura: 'Cromo satinato', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'AD-TECH'
    },
    {
      id: 7,
      nome: 'Sirio',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia con design contemporaneo.',
      varianti: [
        { codice: '9051CS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '9051CS/CL', finitura: 'Bicolore cromo lucido / satinato', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'ARIENI'
    },
    {
      id: 8,
      nome: 'Trio',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia con design minimalista.',
      varianti: [
        { codice: '485RB0880CCS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '485RB0880CCL', finitura: 'Cromo lucido', versione: 'Patent' },
        { codice: '485RB0880CNE', finitura: 'Nero opaco', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'lineacoli'
    },
    {
      id: 9,
      nome: 'Alicia',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia elegante con design curvo.',
      varianti: [
        { codice: '1220213BCS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '1220213BOS', finitura: 'Ottone satinato', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'Fimef'
    },
    {
      id: 10,
      nome: 'Punto',
      categoria: '01',
      categoriaNome: 'Maniglie per porte e per finestre',
      materiale: 'Zama / Zinc',
      sottocategoria: 'Maniglie per porte',
      descrizione: 'Maniglia con design essenziale e minimalista.',
      varianti: [
        { codice: '1205208BCS', finitura: 'Cromo satinato', versione: 'Patent' },
        { codice: '1205208BNE', finitura: 'Nero opaco', versione: 'Patent' }
      ],
      dimensioni: 'Standard',
      fornitore: 'Fimef'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('ferramenta_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem('ferramenta_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const categories = ['01'];
  const materials = [...new Set(products.map(p => p.materiale))].sort();
  const finishes = [...new Set(products.flatMap(p => p.varianti.map(v => v.finitura)))].sort();

  const filteredProducts = products.filter(product => {
    const matchSearch = product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.codice?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = !selectedCategory || product.categoria === selectedCategory;
    const matchMaterial = !selectedMaterial || product.materiale === selectedMaterial;
    const matchFinish = !selectedFinish || product.varianti.some(v => v.finitura === selectedFinish);

    return matchSearch && matchCategory && matchMaterial && matchFinish;
  });

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '600', margin: '0 0 1.5rem', color: '#165096' }}>
          📦 Catalogo Ferramenta Stigliano
        </h1>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '9px', color: '#999', pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Cerca per nome o codice prodotto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              <option value="">Tutte le categorie</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>Categoria {cat}</option>
              ))}
            </select>

            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              style={{
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              <option value="">Tutti i materiali</option>
              {materials.map(mat => (
                <option key={mat} value={mat}>{mat}</option>
              ))}
            </select>

            <select
              value={selectedFinish}
              onChange={(e) => setSelectedFinish(e.target.value)}
              style={{
                padding: '10px 12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: '#fff',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              <option value="">Tutte le finiture</option>
              {finishes.map(fin => (
                <option key={fin} value={fin}>{fin}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ fontSize: '13px', color: '#666' }}>
          {filteredProducts.length} prodotto{filteredProducts.length !== 1 ? 'i' : ''} trovato{filteredProducts.length !== 1 ? 'i' : ''}
          {favorites.length > 0 && ` • ${favorites.length} preferito${favorites.length !== 1 ? 'i' : ''}`}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#fff',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#165096';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(22, 80, 150, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#ddd';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              height: '160px',
              backgroundColor: '#f7f7f5',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {product.immagine ? (
                <img
                  src={product.immagine}
                  alt={product.nome}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <span style={{ fontSize: '12px', color: '#bbb' }}>Immagine non disponibile</span>
              )}
            </div>
            <div style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px', color: '#165096' }}>
                  {product.nome}
                </h3>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
                  {product.sottocategoria}
                </p>
              </div>
              <button
                onClick={() => toggleFavorite(product.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: favorites.includes(product.id) ? '#e74c3c' : '#999'
                }}
                title={favorites.includes(product.id) ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
              >
                <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div style={{ padding: '1rem', fontSize: '13px', color: '#666', borderBottom: '1px solid #eee' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: '600', color: '#333' }}>Materiale:</span> {product.materiale}
              </div>
              <div>
                <span style={{ fontWeight: '600', color: '#333' }}>Dimensioni:</span> {product.dimensioni}
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <button
                onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  backgroundColor: '#f5f5f5',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#165096',
                  marginBottom: '8px',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eee'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              >
                {expandedProduct === product.id ? '▼ Nascondi varianti' : `▶ Visualizza varianti (${product.varianti.length})`}
              </button>

              {expandedProduct === product.id && (
                <div style={{ marginTop: '12px', maxHeight: '400px', overflowY: 'auto' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px solid #eee' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 0.8fr', gap: '8px', paddingBottom: '8px' }}>
                      <div>Codice</div>
                      <div>Finitura</div>
                      <div>Versione</div>
                    </div>
                  </div>
                  {product.varianti.map((variant, idx) => (
                    <div key={idx} style={{
                      display: 'grid',
                      gridTemplateColumns: '1.5fr 1.5fr 0.8fr',
                      gap: '8px',
                      padding: '8px 0',
                      fontSize: '12px',
                      borderBottom: idx < product.varianti.length - 1 ? '1px solid #f0f0f0' : 'none',
                      alignItems: 'center'
                    }}>
                      <div style={{ color: '#165096', fontFamily: 'monospace', fontWeight: '600', cursor: 'pointer' }}>
                        {variant.codice}
                      </div>
                      <div style={{ color: '#333' }}>{variant.finitura}</div>
                      <div style={{ color: '#999', fontSize: '11px' }}>{variant.versione}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          color: '#999',
          fontSize: '14px'
        }}>
          <p>Nessun prodotto trovato con i filtri selezionati.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSelectedMaterial('');
              setSelectedFinish('');
            }}
            style={{
              marginTop: '1rem',
              padding: '10px 20px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              backgroundColor: '#f5f5f5',
              cursor: 'pointer',
              fontSize: '13px',
              color: '#165096',
              fontWeight: '600',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eee'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            Ripristina filtri
          </button>
        </div>
      )}
    </div>
  );
}
