import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Background from "../../components/Background";
import CustomCarousel from "../../components/CustomCarousel";

const carouselData=[
    {
        "url": "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
        "title": "Adeyemo – mom of 3, funds to sell food stuff from stall in front of their house",
        // "details": "Started: 2022-09-09. Status: Ongoing."
    },
];

const SmallBusinessFunds=()=>{
    return (
        <div>
            <Background heading="Small Business Funds" subheading={"We are focused on building a more inclusive and sustainable economy"} donateText="HELP BUILD A SMALL BUSINESS" />
            <div className="main-content">
                <MDBRow>
                    <MDBCol md="3">
                        <img src="https://mdbootstrap.com/img/new/standard/city/044.webp" alt="..." width="100%"/>
                    </MDBCol>
                    <MDBCol md="9">
                        We are dedicated to supporting women-owned small businesses in Nigeria. We provide interest free loans to eligible women entrepreneurs to help them start, grow and scale their businesses. 
                        Our goal is to create a supportive and nurturing environment for women entrepreneurs to thrive. We believe that investing in women-owned businesses is not only the right thing to do but also the smart thing to do, and we are committed to playing our part in making that a reality.
                    </MDBCol>
                </MDBRow>
                <br />
                <div>
                    <h3 className="text-center">Small Business Fund Recipients</h3>
                    <CustomCarousel carou={carouselData}/>
                </div>
            </div>
        </div>
    );
}
export default SmallBusinessFunds;