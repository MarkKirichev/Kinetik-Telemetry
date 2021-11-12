import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

  return (
    <>
      <Nav className="justify-content-center mb-4">
        <Nav.Item className="m-3">
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item className="m-3">
          <Link to="/about">About</Link>
        </Nav.Item>
        <Nav.Item className="m-3">
          <Link to="/stats">Stats</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navigation;
