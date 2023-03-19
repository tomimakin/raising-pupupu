import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import Background from "../components/Background";

const NotFound=()=> {
  return (
    <div>
      <Background heading="Uh-Oh" subheading={"Page Not Found"} showDonate={false} />
            <div className="main-content">
            <MDBRow>
                <MDBCol md="7">
                    <img src={require("../images/404.png")} alt="..." width="100%"/>
                </MDBCol>
                    <MDBCol>
                      <div className="centeredDiv">
                      <i>"You're not where you're going, but that's okay<br />
                        For in this moment, you've found a way<br />
                        To make an impact, to lend a hand<br />
                        To give to a girl struggling to stand<br />
                        So, <a href="/donate">make a donation </a>or <a href="/support/fundraise">fundraise for her</a><br />
                        Because, though you're not where you're going<br />
                        You're not lost where you are."</i>
                      </div>
                      <div className="d-grid gap-2">
                        <MDBBtn outline rounded className="mx-2" color="dark" href="/donate">Donate</MDBBtn>
                        <MDBBtn outline rounded className="mx-2" color="danger" href="/support/fundraise">FundRaise</MDBBtn>
                      </div> 
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
  );
}

export default NotFound;