import React from "react";
import { MDBTableHead } from "mdb-react-ui-kit";

const CustomTableHeading=(props)=>{
    const {heading} = props;

    return (
    <MDBTableHead>
        <tr>
            {heading &&heading.map((h, i)=>(
            <th scope="col" key={i}>{h.toUpperCase()}</th>
            ))}
            <th></th>
        </tr>
    </MDBTableHead>
    );
}

export default CustomTableHeading;