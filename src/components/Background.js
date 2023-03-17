import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const Background=(props)=>{
    const {heading, subheading, quote, showDonate=true, donateText="DONATE NOW", imageHeight="400px"} = props;
    return (
        <div className="p-0">
            <div className="text-center bg-image"
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: imageHeight }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3 text-uppercase pt-3">{heading}</h1>
                            <p>{subheading}</p>
                            <i className='mb-3'>{quote}</i><br />
                            {showDonate &&<MDBBtn outline size="lg" color="danger" style={{color: "white"}} href="/donate">
                                <MDBIcon fas icon="hands-helping" className="me-2" />{donateText}
                            </MDBBtn>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;