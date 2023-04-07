import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, 
    MDBCardFooter, MDBCardTitle, MDBCardText, MDBBtn 
} from "mdb-react-ui-kit";
import config from "../config";
import GetCampaigns from "../functions/GetCampaigns";

const Home=()=>{
    const [total, setTotal]=useState(0);

    useEffect(()=>{
        const getTotal=async()=>{
            let t = await GetCampaigns();
            setTotal(t.reduce((t, v)=>v.raised+t, 0));
        }
        getTotal();
    }, []);

    return (
        <div>
            <Background heading="Who are we" quote={"\"One in every five of the world’s out-of-school children is in Nigeria.\" - UNICEF"}
            />
            <div className="main-content">
                <p>
                    At {process.env.REACT_APP_NAME}, we are dedicated to empowering girls through education. Our mission is to break down barriers and provide girls with the tools they need to succeed and thrive in the classroom and beyond. Our programs focus on improving educational outcomes, providing access to quality learning opportunities, and promoting gender equality. By investing in the education of girls, we believe we can create a better future for all. Join us in our mission to empower the next generation of female leaders and make a lasting impact on the world.
                </p>
                <div>
                    <hr className="splitHr"/>
                    <h2 className="borderedHr">Queen Pupupu</h2>
                    <p className="text-center">
                        <i>Born as the female twin in a time when twins were considered an abomination and nothing but child rearing and cooking was expected of females.
                            Against all odds, she became the queen and founder of Ondo Town, Nigeria.
                            <br/><b>#Let's give our girls better odds!!</b>
                        </i>
                    </p>
                    <hr style={{ height: 2 }}/>
                </div>
                <br />
                <h2 className="text-center" style={{color: "#00008B", textDecoration: "underline"}}>OUR PROGRAMS</h2>
                <div>
                    <MDBRow>
                    {config.programs.map((p, i)=>(
                        <MDBCol md="4" key={i}>
                        <MDBCard className="h-100">
                            <MDBCardImage src={require(`../images/${p.imageSrc}`)} alt={p.imageAlt} position="top" width="375" height="250"/>
                            <MDBCardFooter>
                                <MDBCardTitle>{p.title.toUpperCase()}</MDBCardTitle>
                                <MDBCardText>
                                    {p.description.substring(0, 200)}
                                    {p.description.length>200&&<span> ...</span>}
                                </MDBCardText>
                                {p.url&&<MDBBtn style={{background: "linear-gradient(#e66465, #9198e5)"}} href={`/programs/${p.url}`}>LEARN MORE</MDBBtn>}
                            </MDBCardFooter>
                        </MDBCard>
                        </MDBCol>
                    ))}
                    </MDBRow>
                </div>
                <div className="mt-3 text-center" style={{background: "#1C202D", color: "#eee"}}>
                    <br />Total Raised Since March 2023<br />
                    <span style={{fontSize: 40}}>${total}</span><br />
                </div>
            </div>
        </div>
    );
}

export default Home;