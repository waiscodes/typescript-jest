import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Nav justify variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>Sha256 Hash</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' href='/blockchain'>
            Blockchain
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbar;
