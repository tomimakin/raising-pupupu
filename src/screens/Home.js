import React from "react";
import Background from "../components/Background";

const Home=()=>{
    return (
        <div>
            <Background heading="Who are we" subheading={"\"Educate a girl, and you educate a community.\" - African proverb"}/>
            <div className="main-content">
                <p>
                    {"NAME"} is a non-profit organization dedicated to empowering girls through education. Our mission is to break down barriers and provide girls with the tools they need to succeed and thrive in the classroom and beyond. Our programs focus on improving educational outcomes, providing access to quality learning opportunities, and promoting gender equality. By investing in the education of girls, we believe we can create a better future for all. Join us in our mission to empower the next generation of female leaders and make a lasting impact on the world.
                </p>
                {/* <h2 className="text-center" style={{color: "#00008B"}}>HOW WE WORK</h2> */}
                <h2 className="text-center text-muted">news, events, current and upcoming projects?</h2>
                {/* <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10}}>
                    <div style={{ borderStyle: "outset"}}>one</div>
                    <div style={{ borderStyle: "outset"}}>one</div>
                    <div style={{ borderStyle: "outset"}}>one</div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;