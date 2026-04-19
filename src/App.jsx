import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Code, Video, ExternalLink, BrainCircuit, ArrowRight } from 'lucide-react';
import { dictionaryData } from './data';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [randomTerms, setRandomTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate an array of alphabet letters A-Z
  const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));

  // Initialize random terms on mount
  useEffect(() => {
    // Shuffle and pick 15 terms
    const shuffled = [...dictionaryData].sort(() => 0.5 - Math.random());
    setRandomTerms(shuffled.slice(0, 15));
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (val.trim() !== '') {
      setSelectedLetter(null);
    }
  };

  const handleLetterClick = (letter) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      setSearchTerm('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group terms by alphabet for the sidebar
  const groupedData = useMemo(() => {
    const grouped = {};
    alphabet.forEach(letter => grouped[letter] = []);
    dictionaryData.forEach(term => {
      const letter = term.title.charAt(0).toUpperCase();
      if (grouped[letter]) grouped[letter].push(term);
    });
    return grouped;
  }, [alphabet]);

  // Determine what to display in main area
  let displayedData = [];
  let displayTitle = '';

  if (searchTerm.trim() !== '') {
    displayedData = dictionaryData.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.structuredDefinition && item.structuredDefinition.technical.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    displayTitle = `Search Results for "${searchTerm}"`;
  } else if (selectedLetter) {
    displayedData = dictionaryData.filter(item => 
      item.title.toUpperCase().startsWith(selectedLetter)
    );
    displayTitle = `Terms starting with '${selectedLetter}'`;
  } else {
    displayedData = randomTerms;
    displayTitle = 'Featured Terms';
  }

  const openModal = (term) => {
    setSelectedTerm(term);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedTerm(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  // Helper to correctly render markdown bold (**), italics (*), and inline math ($)
  const renderFormattedText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\$.*?\$)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} style={{ color: 'var(--text-main)', fontWeight: '700' }}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        return <em key={index} style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="bg-gradient"></div>
      
      <div className="container">
        <header>
          <h1><span className="gradient-text">AI & ML</span> Dictionary</h1>
          <p>Your comprehensive guide to Artificial Intelligence and Machine Learning concepts, complete with definitions, technical diagrams, equations, and exact resources.</p>
        </header>

        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search for terms, categories, or keywords..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="app-layout">
        {/* Scrollable Left Sidebar with Terms under Categories */}
        <aside className="sidebar">
          <div className="sidebar-content">
            {alphabet.map(letter => {
              const termsInLetter = groupedData[letter];
              if (termsInLetter.length === 0) return null;
              
              return (
                <div key={letter} className="sidebar-group">
                  <h3 
                    className={`sidebar-letter ${selectedLetter === letter ? 'active' : ''}`}
                    onClick={() => handleLetterClick(letter)}
                    style={{ cursor: 'pointer' }}
                    title={`Filter by ${letter}`}
                  >
                    {letter}
                  </h3>
                  <ul className="sidebar-terms">
                    {termsInLetter.map(term => (
                      <li key={term.id}>
                        <button 
                          className={`sidebar-term-btn ${selectedTerm?.id === term.id ? 'active' : ''}`} 
                          onClick={() => openModal(term)}
                        >
                          {term.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <div className="section-title">
            <span>{displayTitle}</span>
            {selectedLetter && (
              <button className="clear-btn" onClick={() => setSelectedLetter(null)}>
                Clear Filter
              </button>
            )}
          </div>

          {displayedData.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h3>No terms found.</h3>
              <p>Try adjusting your search query or selecting a different letter.</p>
            </div>
          ) : (
            <div className="grid">
              {displayedData.map((term) => (
                <div className="card" key={term.id} onClick={() => openModal(term)}>
                  <div className="card-image-wrapper">
                    {term.image ? (
                      <img src={term.image} alt={term.title} className="card-image" loading="lazy" />
                    ) : (
                      <div className="no-image-placeholder">
                        <BrainCircuit />
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <div className="card-category">{term.category}</div>
                    <h3 className="card-title">{term.title}</h3>
                    <p className="card-desc">
                      {term.structuredDefinition && term.structuredDefinition.technical.length > 100 
                        ? `${term.structuredDefinition.technical.substring(0, 100)}...` 
                        : term.structuredDefinition?.technical || ''}
                    </p>
                    <div className="card-footer">
                      <span>Explore Resources</span>
                      <ArrowRight size={16} className="text-accent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <BrainCircuit size={24} className="text-accent" />
                <span className="gradient-text">AI & ML</span> Dictionary
              </div>
              <p>The definitive interactive guide to artificial intelligence and machine learning architecture.</p>
            </div>
            <div className="footer-right">
              <p className="attribution">
                Content is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-ShareAlike License</a>; 
              </p>
              <p className="attribution" style={{ marginTop: '0.5rem' }}>
                Derived from <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a> and other open academic repositories.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            <X size={24} />
          </button>
          
          {selectedTerm && (
            <>
              <div className="modal-header">
                <div className="modal-title-area">
                  <div className="category">{selectedTerm.category}</div>
                  <h2>{selectedTerm.title}</h2>
                  
                  <div className="structured-definition">
                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.origin)}</p>
                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.introduction)}</p>
                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.technical)}</p>
                    {selectedTerm.structuredDefinition?.technical2 && (
                      <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition.technical2)}</p>
                    )}

                    {selectedTerm.equation && (
                      <div className="equation-container" style={{ margin: '1rem 0 2rem' }}>
                        <BlockMath math={selectedTerm.equation} />
                      </div>
                    )}

                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.equationVars)}</p>
                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.equationMeaning)}</p>
                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.useCase)}</p>

                    {selectedTerm.image && (
                      <figure className="in-text-image">
                        <img src={selectedTerm.image.startsWith('/') ? import.meta.env.BASE_URL + selectedTerm.image.slice(1) : selectedTerm.image} alt={selectedTerm.title} />
                        <figcaption>
                          Image Source: 
                          {selectedTerm.imageCitation.includes(' - http') ? (
                            <>
                              <span style={{margin: '0 0.5rem'}}>{selectedTerm.imageCitation.split(' - http')[0]}</span>
                              <a href={'http' + selectedTerm.imageCitation.split(' - http')[1]} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                                {'http' + selectedTerm.imageCitation.split(' - http')[1]}
                              </a>
                            </>
                          ) : (
                            <a href={selectedTerm.imageCitation.startsWith('http') ? selectedTerm.imageCitation : undefined} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                              {selectedTerm.imageCitation}
                            </a>
                          )}
                        </figcaption>
                      </figure>
                    )}

                    <p className="section-text">{renderFormattedText(selectedTerm.structuredDefinition?.imageRef)}</p>
                    <p className="section-text" style={{ paddingBottom: '1rem' }}>{renderFormattedText(selectedTerm.structuredDefinition?.currentTrends)}</p>
                  </div>

                  
                  {/* Citations Box */}
                  <div className="citations-box">
                    <h4>Citations & Sources</h4>
                    {selectedTerm.imageCitation && (
                      <p className="citation-item">
                        <strong>Image Source:</strong> 
                          {selectedTerm.imageCitation.includes(' - http') ? (
                            <>
                              <span style={{margin: '0 0.5rem'}}>{selectedTerm.imageCitation.split(' - http')[0]}</span>
                              <a href={'http' + selectedTerm.imageCitation.split(' - http')[1]} target="_blank" rel="noopener noreferrer">
                                {'http' + selectedTerm.imageCitation.split(' - http')[1]}
                              </a>
                            </>
                          ) : (
                            <a href={selectedTerm.imageCitation.startsWith('http') ? selectedTerm.imageCitation : undefined} target="_blank" rel="noopener noreferrer">
                              {selectedTerm.imageCitation}
                            </a>
                          )}
                      </p>
                    )}
                    {selectedTerm.defCitations && selectedTerm.defCitations.length > 0 && (
                      <div className="citation-item">
                        <strong>Definition Materials based on:</strong>
                        <ul>
                          {selectedTerm.defCitations.map((cit, idx) => (
                            <li key={idx}><a href={cit.url} target="_blank" rel="noopener noreferrer">{cit.source}</a></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-body">
                <div className="resources-grid">
                  {/* Papers */}
                  {selectedTerm.resources.papers && selectedTerm.resources.papers.length > 0 && (
                    <div className="resource-section">
                      <h3><BookOpen className="resource-icon" size={20} /> Research Papers</h3>
                      <ul className="resource-list">
                        {selectedTerm.resources.papers.map((paper, idx) => (
                          <li key={idx}>
                            <a href={paper.url} target="_blank" rel="noopener noreferrer">
                              <span style={{flex: 1}}>{paper.title}</span>
                              <ExternalLink size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code */}
                  {selectedTerm.resources.code && selectedTerm.resources.code.length > 0 && (
                    <div className="resource-section">
                      <h3><Code className="resource-icon" size={20} /> Code & Modules</h3>
                      <ul className="resource-list">
                        {selectedTerm.resources.code.map((code, idx) => (
                          <li key={idx}>
                            <a href={code.url} target="_blank" rel="noopener noreferrer">
                              <span style={{flex: 1}}>{code.title}</span>
                              <ExternalLink size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tutorials */}
                  {selectedTerm.resources.tutorials && selectedTerm.resources.tutorials.length > 0 && (
                    <div className="resource-section">
                      <h3><BookOpen className="resource-icon" size={20} /> Tutorials</h3>
                      <ul className="resource-list">
                        {selectedTerm.resources.tutorials.map((tutorial, idx) => (
                          <li key={idx}>
                            <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                              <span style={{flex: 1}}>{tutorial.title}</span>
                              <ExternalLink size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Videos */}
                  {selectedTerm.resources.videos && selectedTerm.resources.videos.length > 0 && (
                    <div className="resource-section">
                      <h3><Video className="resource-icon" size={20} /> YouTube Channels / Videos</h3>
                      <ul className="resource-list">
                        {selectedTerm.resources.videos.map((video, idx) => (
                          <li key={idx}>
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                              <span style={{flex: 1}}>{video.title}</span>
                              <ExternalLink size={16} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Related Terms */}
                {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                  <div className="related-terms-section" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Explore Related Concepts</h3>
                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                      {selectedTerm.relatedTerms.map(relatedId => {
                        const relatedData = dictionaryData.find(t => t.id === relatedId);
                        if (!relatedData) return null;
                        return (
                          <button 
                            key={relatedId}
                            onClick={() => {
                              setSelectedTerm(relatedData);
                              const modalContent = document.querySelector('.modal-content');
                              if (modalContent) modalContent.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            style={{
                              padding: '0.6rem 1.2rem',
                              background: 'var(--bg-main)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '99px',
                              cursor: 'pointer',
                              color: 'var(--accent)',
                              fontSize: '0.95rem',
                              fontWeight: '500',
                              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                            onMouseOver={e => { e.target.style.background = '#f1f5f9'; e.target.style.borderColor = 'var(--accent)'; e.target.style.transform = 'translateY(-2px)'; }}
                            onMouseOut={e => { e.target.style.background = 'var(--bg-main)'; e.target.style.borderColor = 'var(--border-color)'; e.target.style.transform = 'translateY(0)'; }}
                          >
                            {relatedData.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="license-badge" style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6', textAlign: 'center' }}>
                  <p>
                    Content is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: '600', textDecoration: 'none' }}>Creative Commons Attribution-ShareAlike License</a>. 
                  </p>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                    Derived from <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Wikipedia</a> and other open academic repositories.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
