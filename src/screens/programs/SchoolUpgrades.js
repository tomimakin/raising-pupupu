import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Background from "../../components/Background";
import CustomCarousel from "../../components/CustomCarousel";
const carouselData=[];

// const carouselData=[
//     {
//         "url": "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
//         "title": "Assembly hall in Ansar Ud Dean, Yemaja, Ondo Town",
//         "details": "Started: 2022-09-09. Status: Ongoing."
//     },
//     {
//         "url": "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
//         "title": "Assembly hall in Ansar Ud Dean, Oke Lisa, Ondo Town",
//         "details": "Started: 2022-09-09. Status: Ongoing."
//     },
//];

const SchoolUpgrades=()=>{
    return (
        <div>
            <Background heading="School Upgrades" subheading={"Every student deserves access to high-quality education."} donateText="HELP US HELP THEM" />
            <div className="main-content">
                <MDBRow>
                <MDBCol md="3">
                    <img src="https://mdbootstrap.com/img/new/standard/city/044.webp" alt="..." width="100%"/>
                </MDBCol>
                    <MDBCol md="9">
                        We are committed to supporting schools in need by providing funds for the upgrading of facilities and resources. We believe that every student deserves access to a high-quality education, and we work tirelessly to ensure that schools have the resources they need to meet this goal.
                        We work closely with school administrators, teachers, and other education professionals to ensure that our funds are used effectively and efficiently. Our aim is to provide schools with the resources they need to offer a high-quality education to all students, regardless of their background or circumstances.
                        We support numerous upgrading projects, such as the following:
                        <ul>
                            <li>
                                Technology upgrades: We provide funds for schools to purchase and upgrade technology resources such as computers, software, and other learning tools.
                            </li>
                            <li>
                                Facility improvements: We support schools in need of repairs, renovations, and other facility improvements, such as updating classrooms, hallways, and playgrounds.
                            </li>
                            <li>
                                Classroom enhancements: We fund projects that help enhance the learning environment in classrooms, including the purchase of new furniture, teaching aids, and educational materials.
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
                <br />
                {carouselData.length>0&&
                <div>
                    <h3 className="text-center">Past, Ongoing and Upcoming Projects</h3>
                    <CustomCarousel carou={carouselData}/>
                </div>}
            </div>
        </div>
    );
}
export default SchoolUpgrades;