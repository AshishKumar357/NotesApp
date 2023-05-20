import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";

const RegisterScreen = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-3 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="px-5 py-3 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-0 text-center heading">SignUp</h2>
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Full Name"
                id="formControlLg"
                type="text"
                size="lg"
              />

              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Confirm Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn size="lg">Submit</MDBBtn>

              <hr className="my-4" />

              <div style={{ display: "inline-flex" }}>
                <a href="/login" className="hyperlink">
                  Already Have an account?
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterScreen;
