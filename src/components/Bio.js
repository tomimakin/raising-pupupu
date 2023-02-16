import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

const Bio=(props)=>{
    const { bods } = props;

    const getDefaultImage=(b)=>{
        try {
            return require(`../images/${b.photo}`);
        } catch {
            console.log("No photo!!")
            return require("../images/noimage.jfif");
        }
    }
    
    if(bods.length===0)return(<div><h1 className="text-center">No Data!!</h1></div>)

    return (
        <div>
            {bods.map((b, i)=>(
                <MDBCard className="mb-3" key={i} style={{width: "100%"}}>
                    <MDBRow className="g-0 p-2">
                        <MDBCol md="2">
                            <MDBCardImage src={getDefaultImage(b)} className="img-thumbnail" alt={"A profile picture of " + b.name} />
                        </MDBCol>
                        <MDBCol md="10">
                            <MDBCardBody>
                                <MDBCardTitle>{b.name}</MDBCardTitle>
                                <MDBCardText>{b.bio}</MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            ))}
        </div>
    );
}

export default Bio;