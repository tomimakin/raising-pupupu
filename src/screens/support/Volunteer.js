import React from "react";
import Background from "../../components/Background";

const Volunteer=()=>{
    return (
        <div>
            <Background heading="Volunteer" quote={"\"The greatest gift you can give someone is your time, your attention, your love, and your concern.\" - Joel Osteen"} showDonate={false} />
            <div className="main-content">
                <div className="volunteerInst">
                    <h2 className="text-center">How You Can Help</h2>
                    <h4>PRAY</h4>
                    <p>Praying is a powerful way to make a difference. Praying for a cause can bring comfort and positive energy to those who are struggling, and it can also help to generate a sense of community among those who are praying together. Prayer can also be a way to focus your intentions and help to manifest positive outcomes for the cause you are supporting.</p>
                    <h4>HOST A SMALL GROUP</h4>
                    <p>Open your home and host a small group for drinks and conversation about our programs and to help request donations and share ideas, concerns and hopes for the cause.</p>
                </div>
                <br />
                <div style={{ backgroundColor: "#350202", color:"#eee", margin: 0, padding: 10, textAlign: "center", fontSize: 25 }}>
                    Do you have other ideas on how you can make an impact by volunteering? <br />Contact us at info@raisingpupupu.org
                </div>
            </div>
        </div>
    );
}
export default Volunteer;