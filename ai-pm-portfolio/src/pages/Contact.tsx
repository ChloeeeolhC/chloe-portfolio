
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center contact-container">
      <Row>
        <Col>
          <Card className="contact-card text-center p-4 shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="mb-3">Get In Touch</Card.Title>
              <Card.Text className="text-muted mb-4">
                我目前对新的工作机会持开放态度，期待与您交流。
              </Card.Text>
              <hr />
              <div className="contact-details mt-4">
                <div className="contact-item">
                  <a href="mailto:chloetao9917@163.com" className="contact-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                      <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000" strokeWidth="2"/>
                    </svg>
                    <span>chloetao9917@163.com</span>
                  </a>
                </div>
                <div className="contact-item">
                  <a href="tel:18874119917" className="contact-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-icon">
                        <path d="M18.107,15.182c-0.293-0.293-0.63-0.51-0.997-0.651c-0.366-0.141-0.759-0.212-1.174-0.212s-0.808,0.071-1.174,0.212c-0.367,0.141-0.704,0.358-0.997,0.651l-1.412,1.412c-0.997-0.56-1.92-1.223-2.76-1.989c-0.84-0.766-1.581-1.633-2.215-2.605l1.412-1.412c0.293-0.293,0.51-0.63,0.651-0.997c0.141-0.367,0.212-0.759,0.212-1.174s-0.071-0.808-0.212-1.174c-0.141-0.367-0.358-0.704-0.651-0.997L7.005,3.893c-0.293-0.293-0.63-0.51-0.997-0.651C5.641,3.099,5.249,3.028,4.834,3.028s-0.808,0.071-1.174,0.212c-0.367,0.141-0.704,0.358-0.997,0.651L1.25,5.293c-0.149,0.149-0.264,0.322-0.34,0.521c-0.076,0.199-0.113,0.41-0.113,0.633c0,0.449,0.09,0.887,0.267,1.304c0.177,0.417,0.398,0.826,0.651,1.218c0.317,0.48,0.674,0.96,1.061,1.435c0.51,0.629,1.08,1.24,1.701,1.821c1.334,1.218,2.83,2.243,4.46,3.049c0.57,0.285,1.136,0.52,1.689,0.692c0.553,0.171,1.083,0.257,1.574,0.257c0.224,0,0.435-0.038,0.633-0.113c0.199-0.076,0.372-0.191,0.521-0.34l1.398-1.398c0.293-0.293,0.51-0.63,0.651-0.997c0.141-0.367,0.212-0.759,0.212-1.174s-0.071-0.808-0.212-1.174c-0.14-0.367-0.357-0.704-0.65-0.997L18.107,15.182z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>18874119917</span>
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
