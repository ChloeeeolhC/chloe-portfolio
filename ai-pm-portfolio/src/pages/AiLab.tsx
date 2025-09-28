import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
import CompetitiveAnalysisAgent from './CompetitiveAnalysisAgent'; // Import the new component

import PrdWriterAgent from './PrdWriterAgent'; // Import the new PRD agent component

const AiLab = () => {
  const [showCompAnalysis, setShowCompAnalysis] = useState(false);
  const [showPrdWriter, setShowPrdWriter] = useState(false);

  const handleShowCompAnalysis = () => setShowCompAnalysis(true);
  const handleCloseCompAnalysis = () => setShowCompAnalysis(false);

  const handleShowPrdWriter = () => setShowPrdWriter(true);
  const handleClosePrdWriter = () => setShowPrdWriter(false);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">AI Lab</h1>
      <p className="text-muted mb-5">这里是我个人对于AI Agent及相关应用的探索性项目。</p>
      <Row>
        <Col md={4}>
          <Card onClick={handleShowCompAnalysis} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>竞品分析助手</Card.Title>
              <Card.Text>
                一个用于辅助完成竞品分析报告的AI Agent。
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card onClick={handleShowPrdWriter} style={{ cursor: 'pointer' }}>
            <Card.Body>
              <Card.Title>PRD撰写助手</Card.Title>
              <Card.Text>
                一个用于辅助撰写产品需求文档 (PRD) 的AI Agent。
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for the Competitive Analysis Agent */}
      <Modal show={showCompAnalysis} onHide={handleCloseCompAnalysis} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>竞品分析助手</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CompetitiveAnalysisAgent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCompAnalysis}>
            关闭
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for the PRD Writer Agent */}
      <Modal show={showPrdWriter} onHide={handleClosePrdWriter} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>PRD撰写助手</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PrdWriterAgent />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrdWriter}>
            关闭
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AiLab;