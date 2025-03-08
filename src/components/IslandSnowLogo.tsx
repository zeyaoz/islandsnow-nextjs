'use client';

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const IslandSnowLogo: React.FC = () => (
  <Row>
    <Col>
      <Image
        className="img-fluid rounded mx-auto d-block py-1"
        src="experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow Hawaii Logo"
      />
    </Col>
  </Row>
);

export default IslandSnowLogo;
