'use client';

import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';

const MiddleMenu: React.FC = () => (
  <Row className="justify-content-center pt-4">
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle as="div" className="dropdown-toggle">
          <strong>MEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Dropdown items would go here */}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle as="div" className="dropdown-toggle">
          <strong>WOMEN</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Dropdown items would go here */}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle as="div" className="dropdown-toggle">
          <strong>KIDS</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Dropdown items would go here */}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle as="div" className="dropdown-toggle">
          <strong>BRANDS</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* Dropdown items would go here */}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <strong>SEARCH</strong>
    </Col>
  </Row>
);

export default MiddleMenu;
