import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from "mdb-react-ui-kit";
import React from "react";
import Background from "../components/Background";

const Donate=()=>{
    return (
        <div>
            <Background heading="Donate" quote={"\"It's not how much we give but how much love we put into giving.\" - Mother Teresa"} showDonate={false} />
            <div className="main-content">
                <MDBRow>
                    <MDBCol>
                        <div>
                            <MDBCard>
                                <MDBCardImage src="https://mdbootstrap.com/img/new/standard/nature/184.webp" position="top" alt="..." />
                                <MDBCardBody>
                                    <MDBCardText>Donating to support girls' education is an investment in their future and the future of their communities. By helping to break down the barriers that limit girls' access to education, you can make a real and lasting difference in their lives.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>
                    <MDBCol>
                        {/* <div className="text-center">
                            <h2>Donate With Zelle</h2>
                            <p>Search for us using the email: info@raisingpupupu.org</p>
                            <h1 style={{color: "green"}}>OR</h1>
                        </div> */}
                        <div>
                            {/* style={{ maxWidth: "601px" }} */}
                            <iframe src="https://givebutter.com/embed/c/eRq6E2" title="donate" width="100%" height="615px" name="givebutter" seamless allowpaymentrequest="true"></iframe>
                            <script src="https://givebutter.com/js/widget.js"></script>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}
export default Donate;