import React, { useState } from "react";
import { MDBTextArea, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Background from "../components/Background";

const Contact=()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [contactError, setContactError] = useState("");

    const handleSendMessage=()=>{
        setContactError("");
        if(!firstName || !lastName || !message || !email){
            setContactError("All fields are required");
            return;
        }
        const emailregex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (!emailregex.test(email)){
            setContactError("Invalid Email Address");
            return;
        }
        console.log("I get here");
    }

    return (
        <div>
            <Background heading="Contact us" />
            <div className="main-content">
                <div>
                    <h2 className="text-center">Send us a message</h2>
                    <MDBInput label="First Name" type="text" onChange={(e)=>setFirstName(e.target.value)}/><br />
                    <MDBInput label="Last Name" type="text" onChange={(e)=>setLastName(e.target.value)}/><br />
                    <MDBInput label="Email Address" type="email" onChange={(e)=>setEmail(e.target.value)}/><br />
                    <MDBTextArea label="Enter your Message" rows={4} onChange={(e)=>setMessage(e.target.value)}/>
                    {contactError&&<span style={{color: "red"}}>{contactError}</span>}<br />
                    <MDBBtn className="w-100" style={{ backgroundColor: "#070630"}} onClick={handleSendMessage}>Send Message</MDBBtn>
                    {/* <MDBCaptcha theme="dark"/> */}
                </div>
            </div>
        </div>
    );
}
export default Contact;