import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note App</h1>
              <p className="subtitle">Easiest and safest Note making ever</p>
            </div>
          </div>
          <div className="m-auto">
            <view style={{ margin: 10 }}>
              <Button variant="outline-green" href="/login">
                Login
              </Button>
            </view>
            <view style={{ margin: 10 }}>
              <Button variant="outline-green" href="/register">
                SignUp
              </Button>
            </view>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
