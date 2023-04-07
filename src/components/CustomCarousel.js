import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem
} from "mdb-react-ui-kit";

const CustomCarousel=(props)=> {
    const {carou, blkText} = props;

    return (
    <div>
        <h3 className="text-center" style={{textDecoration: "underline", color: "#00091a"}}>{blkText}</h3>
        {carou.map((d, i)=>(
        <div  key={i}>
            <i>{d.title}</i>
            <MDBCarousel showControls fade>
                <MDBCarouselItem key={i} className="w-100 d-sm-block" style={{ fontWeight: "bolder" }} itemId={i + 1} src={d.url} alt={`Image of ${d.title}`}></MDBCarouselItem>
            </MDBCarousel>
        </div>
        ))}
    </div>
    );
}

export default CustomCarousel;