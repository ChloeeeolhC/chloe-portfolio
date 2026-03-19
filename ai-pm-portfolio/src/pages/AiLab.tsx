import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './AiLab.css';
import { promptExamples } from '../data';

const aiAgents = [
  {
    title: '竞品分析助手',
    description: '上传产品资料，自动生成结构化竞品分析报告，涵盖 SWOT 分析与 SMART 行动计划。',
    tag: 'AI Agent',
    link: 'http://192.144.142.60:3076/competitive-analysis',
  },
  {
    title: 'PRD 写作助手',
    description: '输入产品核心信息，辅助产品经理撰写包含验收标准与用户故事的高质量 PRD 文档。',
    tag: 'AI Agent',
    link: 'http://192.144.142.60:3076/prd-writer',
  },
];

const AiLab = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState({ title: '', content: '' });

  const handleShow = (prompt: any) => {
    setSelectedPrompt(prompt);
    setShowModal(true);
  };

  return (
    <div className="ailab-page">

      {/* Section 1: AI Agents */}
      <section className="ailab-section">
        <div className="ailab-section-header">
          <span className="ailab-tag">AI Agent</span>
          <h2 className="ailab-section-title">AI 工具构建</h2>
          <p className="ailab-section-desc">基于 AI 能力构建的实用工具，点击体验。</p>
        </div>
        <div className="ailab-agent-grid">
          {aiAgents.map((agent, i) => (
            <a
              key={i}
              href={agent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ailab-agent-card"
            >
              <span className="ailab-agent-tag">{agent.tag}</span>
              <h3 className="ailab-agent-title">{agent.title}</h3>
              <p className="ailab-agent-desc">{agent.description}</p>
              <span className="ailab-agent-link">体验 →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Section 2: Prompt Engineering */}
      <section className="ailab-section">
        <div className="ailab-section-header">
          <span className="ailab-tag">Prompt Engineering</span>
          <h2 className="ailab-section-title">Prompt 工程实例</h2>
          <p className="ailab-section-desc">通过结构化 Prompt 设计，大幅提升 AI 输出质量的实践案例。</p>
        </div>
        <div className="ailab-prompt-grid">
          {promptExamples.map((prompt, i) => (
            <div
              key={i}
              className="ailab-prompt-card"
              onClick={() => handleShow(prompt)}
            >
              {prompt.imageUrl && (
                <div className="ailab-prompt-img">
                  <img src={prompt.imageUrl} alt={prompt.title} />
                </div>
              )}
              <div className="ailab-prompt-body">
                <h3 className="ailab-prompt-title">{prompt.title}</h3>
                <span className="ailab-prompt-read">查看详情 →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedPrompt.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ailab-modal-body">
          <ReactMarkdown>{selectedPrompt.content}</ReactMarkdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AiLab;
