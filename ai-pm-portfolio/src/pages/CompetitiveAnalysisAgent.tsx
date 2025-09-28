
import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const CompetitiveAnalysisAgent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setReport('');
        setError('');

        const formData = new FormData(event.currentTarget);
        
        try {
            const response = await fetch('http://127.0.0.1:5001/analyze', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setReport(result.report);
        } catch (e: any) {
            setError('分析失败，请确保后端服务已正确运行，并检查终端日志。');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="text-center p-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-3">正在分析文本、生成洞察... 请稍候。</p>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    if (report) {
        return (
            <div>
                <h4>竞品分析报告</h4>
                <div className="report-container">
                    <ReactMarkdown>{report}</ReactMarkdown>
                </div>
            </div>
        );
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>行业领域</Form.Label>
                <Form.Control type="text" name="industry" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>我方产品定位</Form.Label>
                <Form.Control type="text" name="product_positioning" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>竞品名称 (逗号分隔)</Form.Label>
                <Form.Control type="text" name="competitors" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>行业关键词 (逗号分隔)</Form.Label>
                <Form.Control type="text" name="keywords" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>上传相关文件</Form.Label>
                <Form.Control type="file" name="files" multiple />
            </Form.Group>

            <div className="text-center">
                <Button variant="primary" type="submit" disabled={isLoading}>
                    开始分析
                </Button>
            </div>
        </Form>
    );
};

export default CompetitiveAnalysisAgent;
