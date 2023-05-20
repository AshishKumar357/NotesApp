import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginScreen.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navFun = () => {
    navigate("/mynotes");
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      const userInfo = localStorage.getItem("userInfo");

      if (userInfo) {
        navFun(true);
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-3 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="px-5 py-3 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-0 text-center heading py-4">LOGIN</h2>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading />}

              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Password"
                id="formControlLgPwd"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />
              <MDBBtn size="lg" onClick={SubmitHandler}>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <div style={{ display: "inline-flex" }}>
                <a href="/forgotPwd" className="hyperlink">
                  Forgot Password?
                </a>

                <a href="/register" className="hyperlink lefft">
                  New User? Regitster here
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginScreen;
