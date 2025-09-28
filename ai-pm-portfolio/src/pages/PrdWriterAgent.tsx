
import React, { useState } from 'react';
import { Form, Button, Card, ProgressBar, Spinner, Alert } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

// Define an interface for our form data
interface IFormData {
    [key: string]: any;
}

const PrdWriterAgent = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<IFormData>({});
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState('');
    const [error, setError] = useState('');

    const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const currentFormData = new FormData(event.currentTarget);
        const newFormData = { ...formData };
        currentFormData.forEach((value, key) => {
            newFormData[key] = value;
        });
        setFormData(newFormData);
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setReport('');
        setError('');

        const finalFormData = new FormData();
        for (const key in formData) {
            finalFormData.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://127.0.0.1:5001/generate-prd', {
                method: 'POST',
                body: finalFormData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setReport(result.report);
            setStep(4); // Move to report view
        } catch (e: any) {
            setError('生成PRD失败，请确保后端服务已正确运行，并检查终端日志。');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };
    
    const progress = (step / 4) * 100;

    return (
        <div>
            <ProgressBar now={progress} label={`${progress.toFixed(0)}%`} className="mb-4" />

            {step === 1 && (
                <Form onSubmit={handleNext}>
                    <h4>第一步：定义产品概况 (Product Overview)</h4>
                    <Form.Group className="mb-3">
                        <Form.Label>产品愿景 (Product Vision)</Form.Label>
                        <Form.Control type="text" name="product_vision" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>解决的问题 (Problem Statement)</Form.Label>
                        <Form.Control as="textarea" rows={3} name="problem_statement" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>目标用户 (Target Audience / User Personas)</Form.Label>
                        <Form.Control as="textarea" rows={3} name="target_audience" required />
                    </Form.Group>
                    <div className="text-end">
                        <Button variant="primary" type="submit">下一步</Button>
                    </div>
                </Form>
            )}

            {step === 2 && (
                <Form onSubmit={handleNext}>
                    <h4>第二步：定义需求细节 (Requirements Details)</h4>
                    <Form.Group className="mb-3">
                        <Form.Label>核心功能列表 (Functional Requirements)</Form.Label>
                        <Form.Control as="textarea" rows={5} name="functional_requirements" placeholder="每行一个功能..." required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>非功能性需求 (Non-Functional Requirements)</Form.Label>
                        <Form.Control as="textarea" rows={3} name="non_functional_requirements" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>成功衡量指标 (Success Metrics / KPIs)</Form.Label>
                        <Form.Control as="textarea" rows={3} name="success_metrics" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={handleBack}>上一步</Button>
                        <Button variant="primary" type="submit">下一步</Button>
                    </div>
                </Form>
            )}

            {step === 3 && (
                <div>
                    <h4>第三步：定义项目边界 (Project Scope)</h4>
                    <Form.Group className="mb-3">
                        <Form.Label>假设与约束 (Assumptions and Constraints)</Form.Label>
                        <Form.Control as="textarea" rows={3} name="assumptions_constraints" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>上传补充材料 (可选)</Form.Label>
                        <Form.Control type="file" name="files" multiple />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={handleBack}>上一步</Button>
                        <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? '正在生成...' : '生成PRD'}
                        </Button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div>
                    <h4>PRD (产品需求文档)</h4>
                    {isLoading ? (
                        <div className="text-center p-5">
                            <Spinner animation="border" />
                            <p className="mt-3">正在生成PRD，请稍候...</p>
                        </div>
                    ) : error ? (
                        <Alert variant="danger">{error}</Alert>
                    ) : (
                        <div className="report-container">
                            <ReactMarkdown>{report}</ReactMarkdown>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PrdWriterAgent;
