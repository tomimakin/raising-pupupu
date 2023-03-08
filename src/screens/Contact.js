import React, { useState } from "react";
import { MDBTextArea, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Background from "../components/Background";
import SendEmail from "../functions/SendEmail";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
};
const Contact=()=>{
    const [contactError, setContactError] = useState("");
    const [contactForm, setContactForm] = useState(initialState);

    const handleSendMessage=()=>{
        setContactError("");
        if(!contactForm["first_name"] || !contactForm["last_name"] || !contactForm["message"] || !contactForm["email"]){
            setContactError("All fields are required");
            return;
        }
        const emailregex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (!emailregex.test(contactForm.email)){
            setContactError("Invalid Email Address");
            return;
        }
        let data = {};
        data.from = contactForm.email;
        data.subject = `Message from ${contactForm.first_name} ${contactForm.last_name}`;
        data.to = process.env.REACT_APP_EMAIL_RECIPIENT;
        data.message = contactForm.message;

        SendEmail(data);
    }

    return (
        <div>
            <Background heading="Contact us" />
            <div className="main-content">
                <div>
                    <h2 className="text-center">Send us a message</h2>
                    <MDBInput label="First Name" type="text" value={contactForm["first_name"] || ""} onChange={(e)=>setContactForm((prev) => {return {...prev, "first_name": e.target.value }})} size="sm" /><br />
                    <MDBInput label="Last Name" type="text" value={contactForm["last_name"] || ""} onChange={(e)=>setContactForm((prev) => {return {...prev, "last_name": e.target.value }})} size="sm" /><br />
                    <MDBInput label="Email Address" type="email" value={contactForm["email"] || ""} onChange={(e)=>setContactForm((prev) => {return {...prev, "email": e.target.value }})} size="sm" /><br />
                    <MDBTextArea label="Enter your Message" rows={4} value={contactForm["message"] || ""} onChange={(e)=>setContactForm((prev) => {return {...prev, "message": e.target.value }})} size="sm" />
                    {contactError&&<span style={{color: "red"}}>{contactError}</span>}<br />
                    <MDBBtn className="w-100" style={{ backgroundColor: "#070630"}} onClick={handleSendMessage}>Send Message</MDBBtn>
                    {/* <MDBCaptcha theme="dark"/> */}
                </div>
            </div>
        </div>
    );
}
export default Contact;