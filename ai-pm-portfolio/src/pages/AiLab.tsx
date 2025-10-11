
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AiLab.css'; // We can create this for custom styling if needed

const aiProjects = [
  {
    title: '竞品分析助手',
    description: '一个用于辅助完成竞品分析报告的AI Agent。',
    link: 'http://192.144.142.60:3076/competitive-analysis',
  },
  {
    title: 'PRD写作助手',
    description: '一个辅助产品经理撰写高质量产品需求文档的AI Agent。',
    link: 'http://192.144.142.60:3076/prd-writer',
  },
];

const AiLab = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">AI Lab</h1>
      <p className="text-muted mb-5">这里是我个人对于AI Agent及相关应用的探索性项目。点击卡片体验。</p>
      <Row>
        {aiProjects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              <Card className="h-100 project-card-lab">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AiLab;
