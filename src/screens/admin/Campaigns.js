import React, { useCallback, useEffect, useState } from "react";
import { MDBBtn, MDBTable, MDBTableBody, MDBBadge, MDBIcon, MDBInput, MDBModal, 
    MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter
} from "mdb-react-ui-kit";
import Background from "../../components/Background";
import GetCampaigns from "../../functions/GetCampaigns";
import CustomTableHeading from "../../components/CustomTableHeading";
import CreateCampaign from "../../functions/CreateCampaign";
import swal from "sweetalert";
import CustomPagination from "../../components/CustomPagination";

const heading = ["Title", "Type", "Status", "Goal", "Raised", "URL"];
let pageSize = 2;

const Campaigns=()=>{
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedData, setSelectedData] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [campaignAction, setCampaignAction] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const handleSearch=(e)=>{
        const searchTxt = e.target.value.toLowerCase();
        const newRes = data.filter(d=>d.url.toLowerCase()?.includes(searchTxt) 
            || d.title?.toLowerCase().includes(searchTxt)
            || d.type?.toLowerCase().includes(searchTxt)
            || d.status?.toLowerCase().includes(searchTxt)
        );
        setPaginatedData(1, newRes);
    }

    const setSct=(id, action)=>{
        const sct = data.filter(d=>d.id === id);
        if(sct.length>0)setSelectedData(sct[0]);
        setCampaignAction(action);
        setModalOpen(true);
    }

    const handleUpdate=(id)=>{
        setSct(id, "Update");
    }

    const handleDelete=(id)=>{
        setSct(id, "Delete");
    }

    const handleAdd=()=>{
        setSelectedData({});
        setSct(0, "Add");
    }

    const validateData=()=>{
        let valid = false;
        if((selectedData.title && selectedData.type)){
            valid = true;
        }
        return valid;
    }

    const setPaginatedData=useCallback((pageNo, filtered)=>{
        setCurrPage(pageNo);
        if(filtered.length>0)setPageCount(Math.ceil(filtered.length/pageSize));
        let endIndex = filtered.length;
        let startIndex = (pageNo - 1) * pageSize;
        let nIndex = pageSize*pageNo;
        if(nIndex<endIndex)endIndex = nIndex;
        let x = filtered.slice(startIndex, endIndex);
        setFilteredData(x);
    }, []);

    const handleCampaignAction=async()=>{
        let res;
        if(campaignAction === "Add"){
            if(!validateData())return;
            res = await CreateCampaign(selectedData, "POST");
        }
        else if(campaignAction === "Update"){
            if(!validateData())return;
            res = await CreateCampaign(selectedData, "PATCH");
        }
        else{
            res = await CreateCampaign(selectedData, "DELETE");
        }
        if(res){
            setModalOpen(false);
            swal("Awesome!!", "Campaign " + campaignAction + " Successful", "success");
        }
        else{
            swal("Sorry :(", "Campaign " + campaignAction + " Failed. Please try again.", "error");
        }
    }

    useEffect(()=>{
        const getCampaigns=async()=>{
            const res = await GetCampaigns();
            setData(res);
            setPaginatedData(1, res);
        }
        getCampaigns();
    }, [modalOpen, setPaginatedData]);

    const goToPage=(p)=>{
        setPaginatedData(p, data);
    }

    return (
        <div>
            <Background heading="Campaigns" imageHeight={"200px"} showDonate={false}/>
            <div className="main-content">
                <div><MDBBtn outline color="danger" onClick={handleAdd}>CREATE NEW CAMPAIGN</MDBBtn></div><br />
                <MDBInput label="Search" onChange={handleSearch}/> <br />
            <MDBTable small striped bordered>
                <CustomTableHeading heading={heading}/>
                <MDBTableBody>
                    {filteredData.map(d=>(
                        <tr key={d.id}>
                            <td>{d.title}</td>
                            <td>{d.type}</td>
                            <td><MDBBadge color={d.status==="published"?"success":"danger"} pill>{d.status}</MDBBadge></td>
                            <td>{d.goal||"N/A"}</td>
                            <td>{d.raised}</td>
                            <td><a href={d.url}>{d.url}</a></td>
                            <td>
                                <MDBBtn floating className="btn btn-dark btn-sm" title="Add new contribution" onClick={()=>handleUpdate(d.id)}>
                                    <MDBIcon fas icon="pencil" />
                                </MDBBtn>{"  "}
                                <MDBBtn floating className="btn btn-dark btn-sm" title="Add new contribution" onClick={()=>handleDelete(d.id)}>
                                    <MDBIcon fas icon="trash" />
                                </MDBBtn>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
            <CustomPagination pages={pageCount} current={currPage} onClick={goToPage}/>
            <MDBModal show={modalOpen} setShow={setModalOpen} tabIndex="-1">
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className="text-center">{campaignAction} Campaign</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={() => setModalOpen(!modalOpen)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form>
                                <div className="mb-3">
                                    <MDBInput
                                    value={selectedData.title||""}
                                    onChange={(e)=>setSelectedData((prev) => {return {...prev, "title": e.target.value }})} 
                                    label="Title:" size="sm"
                                    />
                                </div>
                                <div className="mb-3">
                                    <select className="form-control" value={selectedData.type||""}
                                        onChange={(e)=>setSelectedData((prev) => {return {...prev, "type": e.target.value }})}>
                                        <option value="" disabled>Select Campaign Type:</option>
                                        <option value="fundraise">Fundraiser</option>
                                        <option value="collect">Donation Form</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <MDBInput
                                    value={selectedData.goal||0}
                                    onChange={(e)=>setSelectedData((prev) => {return {...prev, "goal": e.target.value }})} 
                                    label="Goal:" size="sm" type="number"
                                    />
                                </div>
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="dark" onClick={handleCampaignAction}>{campaignAction}</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            </div>
        </div>
    );
}

export default Campaigns;