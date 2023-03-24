import React, { useState } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol,
    MDBIcon, MDBBtn, MDBInput
} from "mdb-react-ui-kit";
import swal from "sweetalert";
import CreateContact from "../functions/CreateContact";

const initialState = {
    "first_name": "",
    "last_name": "",
    "emails": [],
    "tags": ["Newsletter"]
}
const Footer=()=> {
    const [subError, setSubError] = useState("");
    const [newsLetterPeeps, setNewsLetterPeeps] = useState(initialState);

    const handleSubscribe=async()=>{
        if(!newsLetterPeeps["first_name"] || !newsLetterPeeps["last_name"] || !newsLetterPeeps["emails"][0].value){
            setSubError("Your first name, last name and email address are required!!!");
            return;
        }
        const emailregex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (!emailregex.test(newsLetterPeeps.emails[0].value)){
            setSubError("Invalid Email Address");
            return;
        }
        setSubError("");
        let res;
        try{
            res = await CreateContact(newsLetterPeeps, "POST");
        }
        catch(ex) {
            console.log("Error subscribing to newsletter");
        }
        if(res){
            ClearState();
            swal("Awesome!!", "You've been added to our newsletter list", "success");
        }
        else{
            swal("Sorry :(", "Failed to add you to our newsletter list. Please try again.", "error");
        }
    }

    const ClearState=()=>{
        setNewsLetterPeeps(initialState);
    }

    return (
    <MDBFooter bgColor="light">
        <section>
            <MDBContainer className="text-center text-md-start mt-5 pt-1">
                <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Stay in Touch</h6>
                        <span>Get informed about our projects, progress and plans.</span>
                        <MDBInput label="First Name" value={newsLetterPeeps["first_name"] || ""} onChange={(e)=>setNewsLetterPeeps((prev) => {return {...prev, "first_name": e.target.value }})} size="sm" /><br />
                        <MDBInput label="Last Name" value={newsLetterPeeps["last_name"] || ""} onChange={(e)=>setNewsLetterPeeps((prev) => {return {...prev, "last_name": e.target.value }})} size="sm" /><br />
                        <MDBInput label="Email Address" value={newsLetterPeeps.emails[0]?.value || ""} onChange={(e)=>setNewsLetterPeeps({...newsLetterPeeps, emails: [{"value":e.target.value, "type":"personal"}]})} size="sm" />
                        {subError&&<span style={{color: "red", fontSize: 9 }}>{subError}</span>}
                        <br />
                        <MDBBtn onClick={handleSubscribe} color="danger">KEEP ME UPDATED</MDBBtn>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Donate</h6>
                        <span>Support our girls!!</span><br />
                        <MDBBtn color="success" href="/donate">MAKE A DONATION</MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                        <p><a href="/files/policy.pdf" target="_blank" className="text-reset">Privacy Policy</a></p>
                        <p><a href="/files/terms.pdf" target="_blank" className="text-reset">Terms of Use</a></p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><MDBIcon icon="envelope" className="me-3" />info@{process.env.REACT_APP_NAME.replace(" ", "").toLowerCase()}.org</p>
                        <p><MDBIcon icon="phone" className="me-3" /> +1 513 275 7398</p>
                        <p><MDBIcon icon="home" className="me-3" /> P.O.Box 62566, Cincinnati, OH 45262</p>
                        <br />
                        {/* <p>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="facebook-f" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="twitter" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="google" /></a>
                            <a href="#!" className="me-4 text-reset"><MDBIcon fab icon="instagram" /></a>
                        </p> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: "#333", color: "#eee" }}>
            © {new Date().getFullYear()}<a className="text-reset fw-bold" href="https://NAME.com/">{` ${process.env.REACT_APP_NAME.replace(" ", "").toLowerCase()}.org`}</a>
        </div>
    </MDBFooter>
  );
}

export default Footer;