import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import React from "react";
import Background from "../components/Background";

const Donate=()=>{
    return (
        <div>
            <Background heading="Donate" quote={"\"It's not how much we give but how much love we put into giving.\" - Mother Teresa"} showDonate={false} />
            <div className="main-content">
                <p className="text-center" style={{fontStyle: "italic"}}>Raising Pupupu is a 501 (c) (3) public charity. All donations are tax deductible.</p>
                <MDBRow>
                    <MDBCol md="3">
                        <div>
                            <MDBCard>
                                <MDBCardImage src={require("../images/students.png")} position="top" alt="..." />
                                <MDBCardBody>
                                    <MDBCardText>Donating to support girls' education is an investment in their future and the future of their communities. By helping to break down the barriers that limit girls' access to education, you can make a real and lasting difference in their lives.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <div>
                            <h1 className="text-center">COMING SOON</h1>
                            {/* style={{ maxWidth: "601px" }}*/}
                            {/* <iframe src="https://givebutter.com/embed/c/raising-pupupu" title="donate" width="100%" height="615px" name="givebutter" frameborder="0" scrolling="no" seamless allowpaymentrequest></iframe><script src="https://givebutter.com/js/widget.js"></script> */}
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}
export default Donate;