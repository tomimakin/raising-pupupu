import React, { useState } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol,
    MDBIcon, MDBBtn, MDBInput
} from "mdb-react-ui-kit";

const Footer=()=> {
    const [subFName, setSubFName] = useState("");
    const [subLName, setSubLName] = useState("");
    const [subEmail, setSubEmail] = useState("");
    const [subError, setSubError] = useState("");

    const handleSubscribe=()=>{
        if(subFName && subLName && subEmail){
            setSubError("");
            console.log("this guy wants to subscribe", subEmail);
            //save somewhere she can access
        }
        else{
            setSubError("Your first name, last name and email address are required!!!");
        }
    }

    return (
    <MDBFooter bgColor="light">
        <section>
            <MDBContainer className="text-center text-md-start mt-5 pt-1">
                <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Stay in Touch</h6>
                        <span>Get informed about our projects, progress and plans.</span>
                        <MDBInput label="First Name" value={subFName} onChange={(e)=>setSubFName(e.target.value)} size="sm" /><br />
                        <MDBInput label="Last Name" value={subLName} onChange={(e)=>setSubLName(e.target.value)} size="sm" /><br />
                        <MDBInput label="Email Address" value={subEmail} onChange={(e)=>setSubEmail(e.target.value)} size="sm" />
                        {subError&&<span style={{color: "red", fontSize: 9 }}>{subError}</span>}
                        <br />
                        <MDBBtn onClick={handleSubscribe} color="danger">KEEP ME UPDATED</MDBBtn>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Donate</h6>
                        <span>Support our girls!!</span><br />
                        <MDBBtn color="success">MAKE A DONATION</MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                        <p><a href="/about" className="text-reset">About Us</a></p>
                        <p><a href="#!" className="text-reset">Privacy Policy</a></p>
                        <p><a href="#!" className="text-reset">Terms of Use</a></p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><MDBIcon icon="envelope" className="me-3" />info@{process.env.REACT_APP_NAME.replace(" ", "").toLowerCase()}.com</p>
                        <p><MDBIcon icon="phone" className="me-3" /> + 01 234 567 88</p>
                        <br />
                        <p>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="facebook-f" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="twitter" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="google" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="instagram" /></a>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "#333", color: "#eee" }}>
            © {new Date().getFullYear()}<a className="text-reset fw-bold" href="https://NAME.com/">{` ${process.env.REACT_APP_NAME.replace(" ", "").toLowerCase()}.com`}</a>
        </div>
    </MDBFooter>
  );
}

export default Footer;