import React from "react";
import Background from "../components/Background";

const Donate=()=>{
    return (
        <div>
            <Background heading="Donate" quote={"\"It's not how much we give but how much love we put into giving.\" - Mother Teresa"} showDonate={false} />
            <div className="main-content d-md-grid" style={{ gridTemplateColumns: "1fr 1fr", height: "615px"}}>
                <div className="text-center">
                    <p>Donating to support girls' education is an investment in their future and the future of their communities. By helping to break down the barriers that limit girls' access to education, you can make a real and lasting difference in their lives.</p>
                </div>
                <div>
                {/* style={{ maxWidth: "601px" }} */}
                    <iframe src="https://givebutter.com/embed/c/eRq6E2" title="donate" width="100%" height="615px"
                    name="givebutter" seamless allowpaymentrequest="true"></iframe>
                    <script src="https://givebutter.com/js/widget.js"></script>
                </div>
            </div>
        </div>
    );
}
export default Donate;