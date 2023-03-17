import { MDBBtn, MDBCol, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import Background from "../../components/Background";
import React, { useState } from "react";
import { SignInWithEmail } from "../../functions/SignInWithEmail";

const Login=()=>{
    const [user, setUser]=useState({});

    const handleLogin=()=>{
        SignInWithEmail(user);
    }

    return (
        <div>
            <Background heading="LOGIN" imageHeight={"200px"} showDonate={false}/>
            <div className="main-content">
                <MDBRow>
                    <MDBCol md="6"></MDBCol>
                    <MDBCol>
                        <div className="mb-3">
                            <MDBIcon fas icon="user-lock" color="danger" size="2x" style={{display: "flex", flexDirection: "column", alignItems: "center"}}/>
                        </div>
                        <div className="mb-3">
                            <MDBInput label="Email Address" type="email" onChange={(e)=>setUser((prev) => {return {...prev, "email": e.target.value }})} />
                        </div>
                        <div className="mb-3"><MDBInput label="Password" type="password" onChange={(e)=>setUser((prev) => {return {...prev, "password": e.target.value }})} /></div>
                        <div className="mb-3"><MDBBtn onClick={handleLogin} color="dark" className="w-100">Login</MDBBtn></div>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}
export default Login;