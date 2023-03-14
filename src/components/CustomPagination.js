import React from "react";
import {
    MDBPagination, MDBPaginationItem, MDBPaginationLink
} from "mdb-react-ui-kit";

const CustomPagination=(props)=> {
    let {pages, current, onClick} = props;

    const goToPage=(p)=>{
        onClick(p);
    }

    if(pages<=1)return(<></>);
    return (
        <MDBPagination circle className="mb-0">
            <MDBPaginationItem disabled={current===1}>
                <MDBPaginationLink onClick={()=>goToPage(current-1)} tabIndex={-1}>Previous</MDBPaginationLink>
            </MDBPaginationItem>
            {Array.from({length: pages}, (_, i) => i + 1).map((p, i)=>(
                <MDBPaginationItem key={i} active={p===current}><MDBPaginationLink onClick={()=>goToPage(p)}>{p}</MDBPaginationLink></MDBPaginationItem>
            ))}
            <MDBPaginationItem disabled={current===pages}>
                <MDBPaginationLink onClick={()=>goToPage(current+1)}>Next</MDBPaginationLink>
            </MDBPaginationItem>
        </MDBPagination>
    );
}

export default CustomPagination;
