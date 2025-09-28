import React, { useState } from 'react';
import { Tab, Tabs, Card, Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './AiBusinessAnalysis.css';
import { caseStudies, promptExamples } from '../data'; // Import data from the central data file

const AiBusinessAnalysis = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState({ title: '', content: '', imageUrl: '' });

  const handleShowModal = (caseStudy: any) => {
    setSelectedCase(caseStudy);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <Tabs defaultActiveKey="cases" id="analysis-tabs" className="mb-3">
        <Tab eventKey="cases" title="商业分析案例">
          <div className="row">
            {caseStudies.map((study, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card className="case-card" onClick={() => handleShowModal(study)}>
                  <Card.Img variant="top" src={study.imageUrl} className="card-logo-img" />
                  <Card.Body>
                    <Card.Title className="text-center">{study.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <footer className="blockquote-footer mt-4 text-center">
            以上文稿均为声动活泼实习期间的商业分析稿件，音频节目见于播客「声动早咖啡」
          </footer>
        </Tab>
        <Tab eventKey="prompts" title="AI Prompt工程实例">
          <div className="row">
            {promptExamples.map((study, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card className="case-card" onClick={() => handleShowModal(study)}>
                  <Card.Img variant="top" src={study.imageUrl} className="card-logo-img" />
                  <Card.Body>
                    <Card.Title className="text-center">{study.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCase.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-wrapper">
          <ReactMarkdown>{selectedCase.content}</ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AiBusinessAnalysis;