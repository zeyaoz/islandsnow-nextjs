'use client';

import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const FooterMenu: React.FC = () => (
  <footer className="py-3" style={{ backgroundColor: '#292929', color: 'white' }}>
    <Container>
      <Row>
        <Col md={4}>
          <div>NAVIGATION</div>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col md={4}>
          <div>MAIN MENU</div>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col md={4}>
          <div>CONNECT</div>
          <hr />
          <div>Sign up for the latest updates</div>
          <div className="py-2">
            <InputGroup size="sm" style={{ maxWidth: '230px' }}>
              <Form.Control
                type="text"
                placeholder="Enter Email Address"
                style={{ borderRadius: 0 }}
              />
              <Button
                variant="dark"
                style={{
                  borderRadius: 0,
                }}
              >
                Join
              </Button>
            </InputGroup>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
