import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
    MDBModalTitle, MDBModalBody, MDBModalFooter, MDBTextArea, MDBInput, MDBRow, MDBCol,
    MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Background from "../../components/Background";
import CreateCampaign from "../../functions/CreateCampaign";
import swal from "sweetalert";
import GetCampaigns from "../../functions/GetCampaigns";

const initialState = {
    description: "",
    goal: 0,
    title: "",
    type: "fundraise"
}

const Fundraise=()=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [campaign, setCampaign] = useState(initialState);
    const [fundraisers, setFundraisers] = useState([]);

    const createFundraiseCampaign=async()=>{
        let res;
        try{
            res = await CreateCampaign(campaign, "POST");
            console.log(res)
        }
        catch(ex) {
            console.log("Error creating campaign");
        }
        if(res){
            setModalOpen(false);
            swal("Awesome!!", "Fundraiser created.", "success");
        }
        else{
            swal("Sorry :(", "Error creating fundraiser. Please try again.", "error");
        }
    }
    useEffect(()=>{
        const getFundraisers=async()=>{
            let res = await GetCampaigns();
            if(res.length>0){
                res = res.filter(campaign=>campaign.type === "fundraise" && campaign.raised !== campaign.goal && campaign.status === "published");
            }
            setFundraisers(res);
        }
        getFundraisers();
    }, []);

    return (
        <div>
            <Background heading="Fundraise" quote={"\"The power of one, if fearless and focused, is formidable, but the power of many working together is better.\" - Gloria Macapagal Arroyo"} showDonate={false}/>
            <div className="main-content">
                {fundraisers.length===0 && <h2 className="text-center">There are no active fundraisers</h2>}
                <MDBBtn onClick={()=>setModalOpen(true)} className="w-100" style={{ backgroundColor: "#350202"}}>Setup a Giving Page</MDBBtn>
                <br /><br />
                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {fundraisers.map(f=>(
                        <MDBCol key={f.id}>
                            <MDBCard className="h-100">
                                <MDBCardImage
                                src={f.cover}
                                alt={"Image for " + f.title}
                                position="top"
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{f.title}</MDBCardTitle>
                                    <MDBCardText>{f.description}</MDBCardText>
                                    <a href={f.url} target="_blank" rel="noreferrer">Donate Now</a>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <small className="text-muted">${f.raised} raised of ${f.goal}</small><br />
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </div>
            <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">Giving Page</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={() => setModalOpen(!modalOpen)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className="mb-3">
                                    <MDBInput
                                    value={campaign.title}
                                    onChange={(e)=>setCampaign((prev) => {return {...prev, "title": e.target.value }})} 
                                    label="Title:"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBTextArea
                                    value={campaign.description}
                                    onChange={(e)=>setCampaign((prev) => {return {...prev, "description": e.target.value }})} 
                                    label="Description:"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={campaign.goal}
                                    onChange={(e)=>setCampaign((prev) => {return {...prev, "goal": e.target.value }})} 
                                    type="number"
                                    label="Goal:"
                                    />
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={createFundraiseCampaign}>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default Fundraise;