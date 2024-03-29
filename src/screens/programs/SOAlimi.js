import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Background from "../../components/Background";
import CustomCarousel from "../../components/CustomCarousel";

const carouselData=[
    {
        "url": "/images/lecture_series.jpg",
        "title": "Lecture series in Ondo town for 4 consecutive saturdays with over 180 women in attendance.",
    },
];

const SOAlimi=()=>{
    return (
        <div>
            <Background heading="S.O.Alimi Competition" subheading={"Promoting Education and Community Engagement."} donateText="SUPPORT THE S.O.ALIMI COMPETITION" />
            <div className="main-content">
                <MDBRow>
                    <MDBCol md="3">
                        <img src={require("../../images/soalimi.jpg")} alt="..." width="100%"/>
                    </MDBCol>
                    <MDBCol md="9">
                        We are committed to promoting education and community engagement among primary and secondary school students. Our events include reading, debates, sports and quiz competitions for students, as well as singing competitions for women. We provide food, drinks, gifts, and money to all attendees, including participants, parents, and guests.
                        Competitions are held yearly in Ondo town, and they typically attract between 150 to 200 people. 
                        In addition to our competitions, we also:
                        <ul>
                            <li>Organize educational lectures given by women for the women (students included) in the community.</li>
                            <li>Fund construction projects in Ondo Town.</li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <br />
                {carouselData.length>0&&
                <div>
                    <CustomCarousel carou={carouselData} blkText={"Our Events"}/>
                </div>}
            </div>
        </div>
    );
}
export default SOAlimi;