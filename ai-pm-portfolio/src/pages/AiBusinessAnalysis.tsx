import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './AiBusinessAnalysis.css';
import { caseStudies } from '../data';

const categoryGroups = [
  {
    id: 'ecommerce',
    label: '电商零售',
    tag: 'E-Commerce',
    cases: [caseStudies[0], caseStudies[5]],
  },
  {
    id: 'local',
    label: '本地生活',
    tag: 'Local Life',
    cases: [caseStudies[1], caseStudies[2]],
  },
  {
    id: 'consumer',
    label: '消费品牌',
    tag: 'Consumer Brand',
    cases: [caseStudies[3], caseStudies[6], caseStudies[8]],
  },
  {
    id: 'ai-tech',
    label: 'AI 与科技',
    tag: 'AI & Tech',
    cases: [caseStudies[4]],
  },
  {
    id: 'global',
    label: '全球视野',
    tag: 'Global',
    cases: [caseStudies[7], caseStudies[9], caseStudies[10]],
  },
];

const AiBusinessAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState({ title: '', content: '', imageUrl: '' });
  const [activeCategory, setActiveCategory] = useState('ecommerce');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    categoryGroups.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleShowModal = (caseStudy: any) => {
    setSelectedCase(caseStudy);
    setShowModal(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="ab-page">
      {/* Left: Timeline Sidebar */}
      <aside className="ab-sidebar">
        <div className="timeline-track">
          {categoryGroups.map((cat, i) => (
            <div
              key={cat.id}
              className={`timeline-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => scrollToSection(cat.id)}
            >
              <div className="timeline-dot-wrap">
                <div className="timeline-dot" />
                {i < categoryGroups.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-labels">
                <span className="timeline-tag">{cat.tag}</span>
                <span className="timeline-label">{cat.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="ab-footnote">实习期间商业分析稿件<br />见于播客「声动早咖啡」</p>
      </aside>

      {/* Right: Article Cards */}
      <main className="ab-content">
        {categoryGroups.map((cat) => (
          <section key={cat.id} id={cat.id} className="ab-section">
            <div className="ab-section-header">
              <span className="ab-section-tag">{cat.tag}</span>
              <h2 className="ab-section-title">{cat.label}</h2>
            </div>
            <div className="ab-cards">
              {cat.cases.map((study, idx) => (
                <div
                  className="ab-card"
                  key={idx}
                  onClick={() => handleShowModal(study)}
                >
                  <div className="ab-card-text">
                    <h3 className="ab-card-title">{study.title}</h3>
                    <span className="ab-card-read">Read Article →</span>
                  </div>
                  {study.imageUrl && (
                    <div className="ab-card-img-wrap">
                      <img src={study.imageUrl} alt={study.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCase.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-scroll">
          <ReactMarkdown>{selectedCase.content}</ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AiBusinessAnalysis;
