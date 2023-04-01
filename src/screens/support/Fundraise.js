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
    type: "fundraise",
    subtitle: ""
}

const Fundraise=()=>{
    const [modalOpen, setModalOpen] = useState(false);
    const [campaign, setCampaign] = useState(initialState);
    const [fundraisers, setFundraisers] = useState([]);

    const createFundraiseCampaign=async()=>{
        let res;
        try{
            res = await CreateCampaign(campaign, "POST");
        }
        catch(ex) {
            console.log("Error creating campaign");
        }
        if(res){
            setModalOpen(false);
            swal("Awesome!!", "Giving page request received. We'll be contacting you via the email provided for more information.", "success");
        }
        else{
            swal("Sorry :(", "Error creating fundraiser. Please try again.", "error");
        }
    }
    useEffect(()=>{
        const getFundraisers=async()=>{
            let res = await GetCampaigns();
            if(res.length>0){
                res = res.filter(campaign=>campaign.type === "fundraise" && (campaign.subtitle === null || campaign.subtitle === "") && campaign.raised !== campaign.goal && campaign.status === "published");
            }
            setFundraisers(res);
        }
        getFundraisers();
    }, []);

    return (
        <div>
            <Background heading="Fundraise" quote={"\"The power of one, if fearless and focused, is formidable, but the power of many working together is better.\" - Gloria Macapagal Arroyo"} showDonate={false}/>
            <div className="main-content">
                <p className="text-center">Do you want to set up peer to peer fundraising for a specific project or female on your heart or as an alternative gift for birthdays or holidays? Click the button below to setup a giving page or contact us if you are interested in something more.</p>
                <MDBBtn onClick={()=>setModalOpen(true)} className="w-100" style={{ backgroundColor: "#350202"}}>Setup a Giving Page</MDBBtn>
                {fundraisers.length===0 && <h2 className="text-center">There are no active fundraisers</h2>}
                <br /><br />
                <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {fundraisers.map(f=>(
                        <MDBCol key={f.id}>
                            <MDBCard className="h-100">
                                <MDBCardImage
                                src={f.cover.url}
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
                                    placeholder="The title of the fundraiser"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBTextArea
                                    value={campaign.description}
                                    onChange={(e)=>setCampaign((prev) => {return {...prev, "description": e.target.value }})} 
                                    label="Description:"
                                    placeholder="Some information about the fundraiser. Who/what is it for?"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={campaign.subtitle}
                                    onChange={(e)=>setCampaign((prev) => {return {...prev, "subtitle": e.target.value }})}
                                    label="Email Address:"
                                    placeholder="Your email address so we can contact you"
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