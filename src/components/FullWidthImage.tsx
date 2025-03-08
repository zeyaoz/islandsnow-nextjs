'use client';

import React from 'react';
import { Row, Image } from 'react-bootstrap';

const FullWidthImage: React.FC = () => (
  <Row className="justify-content-center">
    <Image
      className="pt-2 img-fluid w-100"
      src="experience-islandsnow-bootstrap-main.png"
      alt="Island Snow Main Picture"
    />
  </Row>
);

export default FullWidthImage;
