import React, { useEffect, useState } from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBBadge } from "mdb-react-ui-kit";
import Background from "../../components/Background";
import GetCampaigns from "../../functions/GetCampaigns";
import CustomTableHeading from "../../components/CustomTableHeading";

//where type = fundraise
const heading=["Id", "Title", "Goal", "Ends At", "Status", "Raised", "URL"];

const Campaigns=()=>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getCampaigns=async()=>{
            const res = await GetCampaigns();
            setData(res);
        }
        getCampaigns();
    }, []);

    return (
        <div>
            <Background heading="Fundraisers" imageHeight={"200px"} showDonate={false}/>
            <div className="main-content">
            <MDBTable small>
                <CustomTableHeading heading={heading}/>
                <MDBTableBody>
                    {data.map(d=>(
                        <tr key={d.id}>
                            <td>{d.title}</td>
                            <td>{d.goal}</td>
                            <td>{d.ends_at}</td>
                            <td><MDBBadge color={d.status==="published"?"success":"danger"} pill>{d.status}</MDBBadge></td>
                            <td>{d.raised}</td>
                            <td>{d.url}</td>
                            <td>
                                <MDBBtn color="link" rounded size="sm">Edit</MDBBtn>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
            </div>
        </div>
    );
}

export default Campaigns;