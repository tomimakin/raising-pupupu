import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Background from "../../components/Background";
import CustomCarousel from "../../components/CustomCarousel";

// const carouselData=[
//     {
//         "url": "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
//         "title": "Fatima",
//         "details": "Financial assistance to study at the University of xxx"
//     },
// ];
const carouselData=[];

const SchoolFees=()=>{
    return (
        <div>
            <Background heading="School and Exam Fees" subheading={"We understand the importance of education and how it can transform lives."} donateText="HELP OUR GIRLS REACH THEIR FULL POTENTIAL" />
            <div className="main-content">
                <MDBRow>
                    <MDBCol md="3">
                        <img src="https://mdbootstrap.com/img/new/standard/city/044.webp" alt="..." width="100%"/>
                    </MDBCol>
                    <MDBCol md="9">
                        Our mission is to provide financial assistance to eligible female students to cover the costs of school and exam fees. We believe that education is a fundamental human right and that all students should have access to quality education regardless of their socio-economic background. We understand the significant financial barriers that can prevent female students from pursuing their education and we aim to bridge the gap by providing support that can help these students stay in school and achieve their academic goals. We provide financial assistance to cover the costs of the following: 
                        <ul>
                            <li>Tuition</li>
                            <li>Textbooks</li>
                            <li>Uniforms</li>
                            <li>Exam Fees</li>
                            <li>... and other necessary expenses</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <br />
                {carouselData.length>0&&
                <div>
                    <h3 className="text-center">Our Scholarship Recipients</h3>
                    <CustomCarousel carou={carouselData}/>
                </div>}
            </div>
        </div>
    );
}
export default SchoolFees;