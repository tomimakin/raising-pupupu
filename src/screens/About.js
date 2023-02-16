import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import Background from "../components/Background";
import BoardOfDirectors from "./about/BoardOfDirectors";
import MissionVision from "./about/MissionVision";
import OurStaff from "./about/OurStaff";
import { useLocation } from "react-router-dom";
    
const About=()=>{
    const location = useLocation();
    const [verticalActive, setVerticalActive] = useState("mission");

    React.useEffect(()=>{
        let tab = location.pathname.replaceAll("/about", "");
        if(tab)setVerticalActive(tab.split("/")[1]);
    }, [location.pathname])

    return (
        <div>
            <Background heading="About us" subheading={"\"The best way to change the world is to educate girls.\" - Malala Yousafzai"}/>
            <div className="main-content">
                <MDBRow>
                    <MDBCol size="3">
                        <MDBTabs className="flex-column text-center">
                            <MDBTabsItem>
                                <MDBTabsLink href="/about/mission" active={verticalActive === "mission"}>Our Mission, Vision and Values</MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink href="/about/team" active={verticalActive === "team"}>
                                    Meet the Team
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink href="/about/board" active={verticalActive === "board"}>Board of Directors</MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>
                    </MDBCol>
                    <MDBCol size="9">
                        <MDBTabsContent>
                            <MDBTabsPane show={verticalActive === "mission"}>
                                <MissionVision />
                            </MDBTabsPane>
                            <MDBTabsPane show={verticalActive === "team"}>
                                <OurStaff />
                            </MDBTabsPane>
                            <MDBTabsPane show={verticalActive === "board"}>
                                <BoardOfDirectors />
                            </MDBTabsPane>
                        </MDBTabsContent>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}

export default About;