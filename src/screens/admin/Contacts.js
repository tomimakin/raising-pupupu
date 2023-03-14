import React, { useCallback, useEffect, useState } from "react";
import { MDBBtn, MDBIcon, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
    MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput, MDBCheckbox
} from "mdb-react-ui-kit";
import Background from "../../components/Background";
import GetContacts from "../../functions/GetContacts";
import { MDBDataTable } from "mdbreact";
import CreateContact from "../../functions/CreateContact";
import GetCampaigns from "../../functions/GetCampaigns";
import swal from "sweetalert";
import CreateTransaction from "../../functions/CreateTransaction";

const initialState = {
    "first_name": "",
    "last_name": "",
    "emails": [],
    "tags": []
}
const Contacts=()=>{
    const [rows, setRows] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [tmodalOpen, setTModalOpen] = useState(false);
    const [contact, setContact] = useState(initialState);
    const [contactError, setContactError] = useState("");
    const [transaction, setTransaction] = useState({});
    const [contactAction, setContactAction] = useState("");
    const [campaigns, setCampaigns] = useState([]);

    const addDonation = useCallback((id)=>{
        let trans = {
            "contact_id": id,
            "campaign_code": "",
            "payment_method": "cash",
            "amount": 0,
        }
        setTransaction(trans);
        setTModalOpen(true);
    }, []);

    const addNewDonation=async()=>{
        const res = await CreateTransaction(transaction);
        if(res){
            setTModalOpen(false);
            swal("Awesome!!", "Donation Added", "success");
        }
        else{
            swal("Sorry :(", "Failed to add donation. Please try again.", "error");
        }
    }

    const setSct=useCallback((r, action)=>{
        setContact(r);
        setContactAction(action);
        setModalOpen(true);
    }, []);

    const deleteContact = useCallback((r)=>{
        setSct(r, "Delete");
    }, [setSct]);

    
    // const updateContact=useCallback((r)=>{
    //     setSct(r, "Update");
    // }, [setSct]);
    

    const handleTagChange=(e)=>{
        let tg = [];
        if(e.target.checked){
            tg = [e.target.value];
        }
        setContact((prev) => {return {...prev, "tags": tg }})
    }

    const isValidContact=()=>{
        if(!contact["first_name"] || !contact["last_name"] || !contact["emails"][0].value){
            setContactError("Contact first name, last name and email address are required!!!");
            return false;
        }
        const emailregex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (!emailregex.test(contact.emails[0].value)){
            setContactError("Invalid Email Address");
            return false;
        }
        return true;
    }

    const handleContactAction=async()=>{
        setContactError("");
        let res;
        if(contactAction === "Delete"){
            res = await CreateContact(contact, "DELETE");
        }
        else{
            if(!isValidContact())return;
            if(contactAction==="Update"){
                res = await CreateContact(contact, "PATCH");
            }
            if(contactAction==="Add"){
                res = await CreateContact(contact, "POST");
            }
        }
        if(res){
            setModalOpen(false);
            setContact(initialState);
            swal("Awesome!!", `Contact ${contactAction} Successful`, "success");
        }
        else{
            swal("Sorry :(",`Contact ${contactAction} Failed. Please try again.`, "error");
        }
    }

    useEffect(()=>{
        const getContacts=async()=>{
            let res = await GetContacts();
            let cpgns =  await GetCampaigns();
            const rows=[];
            res.forEach(row=>{
                row.action = <>
                <MDBBtn floating className="btn btn-success btn-sm" title="Add Donation" onClick={() => addDonation(row.id)}>
                    <MDBIcon fas icon="money-bill" />
                </MDBBtn>{" "}
                <MDBBtn floating className="btn btn-danger btn-sm" title="Delete Contact" onClick={() => deleteContact(row)}>
                    <MDBIcon fas icon="trash" />
                </MDBBtn>{"  "}
                {/* <MDBBtn floating className="btn btn-dark btn-sm" title="Edit Contact" onClick={() => updateContact(row)}>
                    <MDBIcon fas icon="pencil" />
                </MDBBtn> */}
                </>;
                row.email = row.emails[0]?.value;
                row.total_contributions = row.stats.total_contributions;
                rows.push(row);
            });

            const data = {
                columns: [
                {
                    label: "First Name",
                    field: "first_name",
                },
                {
                    label: "Last Name",
                    field: "last_name",
                },
                {
                    label: "Email",
                    field: "email",
                },
                {
                    label: "Total Contribution ($)",
                    field: "total_contributions"
                },
                {
                    label: "",
                    field: "action",
                }
            ],
                rows: rows
            };
            setRows(data);
            setCampaigns(cpgns);
        }
        getContacts();
    }, [modalOpen, deleteContact, addDonation]);

    return (
        <div>
            <Background heading="Donors and Newsletter Contacts" imageHeight={"200px"} showDonate={false}/>
            <div className="p-2"><MDBBtn outline color="danger" onClick={()=>setSct(initialState, "Add")}>CREATE NEW CONTACT</MDBBtn></div>
            <div className="main-content">
            <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">{contactAction} Contact</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={() => setModalOpen(!modalOpen)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className="mb-3">
                                    <MDBInput
                                    value={contact.first_name}
                                    onChange={(e)=>setContact((prev) => {return {...prev, "first_name": e.target.value }})} 
                                    label="First Name:" size="sm"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={contact.last_name}
                                    onChange={(e)=>setContact((prev) => {return {...prev, "last_name": e.target.value }})} 
                                    label="Last Name:" size="sm"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBInput label="Email Address" value={contact.emails[0]?.value || ""} onChange={(e)=>setContact({...contact, emails: [{"value":e.target.value, "type":"personal"}]})} size="sm" />
                                </div>
                                <div className="mb-3">
                                    <MDBCheckbox name="tags" value="newsletter" label="newsletter" inline onChange={handleTagChange} checked={contact.tags.includes("newsletter")} />
                                </div>
                                {contactError&&<span style={{color: "red", fontSize: 9 }}>{contactError}</span>}
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={handleContactAction}>{contactAction}</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal show={tmodalOpen} setShow={setTModalOpen} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">New Donation</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={() => setTModalOpen(!tmodalOpen)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className="mb-3">
                                    <select className="form-control" value={transaction.campaign_code||""}
                                        onChange={(e)=>setTransaction((prev) => {return {...prev, "campaign_code": e.target.value }})}>
                                        <option value="" disabled>Select Campaign:</option>
                                        {campaigns.map(c=>(
                                            <option key={c.id} value={c.code}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={transaction.amount||0}
                                    onChange={(e)=>setTransaction((prev) => {return {...prev, "amount": e.target.value }})} 
                                    label="Amount:" size="sm"
                                    type="number"
                                    />
                                </div>
                                {/* {contactError&&<span style={{color: "red", fontSize: 9 }}>{contactError}</span>} */}
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="dark" onClick={addNewDonation}>Add</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBDataTable className="table" bordered striped hover data={rows} noBottomColumns={true} />
            </div>
        </div>
    );
}

export default Contacts;