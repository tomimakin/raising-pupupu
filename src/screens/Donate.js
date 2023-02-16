import React from "react";
import Background from "../components/Background";

const Donate=()=>{
    return (
        <div>
            <Background heading="Donate" subheading={"\"It's not how much we give but how much love we put into giving.\" - Mother Teresa"} showDonate={false} />
            <div className="main-content">
                Donation form from givebutter here
            </div>
        </div>
    );
}
export default Donate;