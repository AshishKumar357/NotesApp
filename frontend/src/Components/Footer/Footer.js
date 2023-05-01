import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col></Col>
          <Col classname="text-center py-3">
            {/* this was not working so added col above and below 
          so now we have 100% width divided in 3 cols and putting content in center one */}
            Copyrights &copy; NoteApp reserved with Ashish Kumar
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
