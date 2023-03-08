import React, { useEffect, useState } from "react";
import { MDBBtn, MDBIcon, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader,
    MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput, MDBCheckbox
} from "mdb-react-ui-kit";
import Background from "../../components/Background";
import GetContacts from "../../functions/GetContacts";
import { MDBDataTable } from "mdbreact";
import CreateContact from "../../functions/CreateContact";
import swal from "sweetalert";

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

    const addNewTransaction=(id)=>{
        let trans = {
            "contact_id": id,
            "campaign_code": "VAXYTD",
            "payment_method": "cash",
            "amount": 200,
        }
        console.log("doing something to ", id);
    }

    const handleTagChange=(e)=>{
        let tg = [];
        if(e.target.checked){
            tg = [e.target.value];
        }
        setContact((prev) => {return {...prev, "tags": tg }})
    }

    const addNewContact=async()=>{
        if(!contact["first_name"] || !contact["last_name"] || !contact["emails"][0].value){
            setContactError("Contact first name, last name and email address are required!!!");
            return;
        }
        const emailregex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        if (!emailregex.test(contact.emails[0].value)){
            setContactError("Invalid Email Address");
            return;
        }
        setContactError("");
        let res;
        try{
            res = await CreateContact(contact);
        }
        catch(ex) {
            console.log("Error subscribing to newsletter");
        }
        if(res){
            setModalOpen(false)
            swal("Awesome!!", "Contact Added", "success");
        }
        else{
            swal("Sorry :(", "Failed to add contact. Please try again.", "error");
        }
    }

    useEffect(()=>{
        const getContacts=async()=>{
            let res = await GetContacts();
            const rows=[];
            res.forEach(row=>{
                row.action = <MDBBtn floating className="btn btn-success btn-sm" title="Add new contribution" onClick={()=>addNewTransaction(row.id)}>
                    <MDBIcon fas icon="money-bill" />
                </MDBBtn>;
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
        }
        getContacts();
    }, []);

    return (
        <div>
            <Background heading="Donors and Newsletter Contacts" imageHeight={"200px"} showDonate={false}/>
            <div className="p-2"><MDBBtn outline color="danger" onClick={()=>setModalOpen(true)}>CREATE NEW CONTACT</MDBBtn></div>
            <div className="main-content">
            <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">Add Contact</MDBModalTitle>
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
                                    <MDBCheckbox name="tags" value="newsletter" label="newsletter" inline onChange={handleTagChange} />
                                </div>
                                {contactError&&<span style={{color: "red", fontSize: 9 }}>{contactError}</span>}
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={addNewContact}>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBModal show={tmodalOpen} setShow={setTModalOpen} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">New Transaction</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={() => setTModalOpen(!modalOpen)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className="mb-3">
                                    <MDBInput
                                    value={transaction.campaign_code}
                                    onChange={(e)=>setTransaction((prev) => {return {...prev, "campaign_code": e.target.value }})} 
                                    label="Campaign:" size="sm"
                                    />
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={transaction.amount}
                                    onChange={(e)=>setTransaction((prev) => {return {...prev, "amount": e.target.value }})} 
                                    label="Amount:" size="sm"
                                    type="number"
                                    />
                                </div>
                                {/* <div className="mb-3">
                                    <MDBCheckbox name="tags" value="newsletter" label="newsletter" inline onChange={handleTagChange} />
                                </div> */}
                                {/* {contactError&&<span style={{color: "red", fontSize: 9 }}>{contactError}</span>} */}
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={addNewContact}>Save</MDBBtn>
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