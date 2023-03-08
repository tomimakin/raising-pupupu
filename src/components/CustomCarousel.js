import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
} from "mdb-react-ui-kit";

const CustomCarousel=(props)=> {
    const {carou} = props;
    console.log(props)
    return (
    <MDBCarousel showControls fade>
        {carou.map((d, i)=>(
        <MDBCarouselItem key={i} className="w-100 d-block" itemId={i+1} src={d.url} alt={`Image of ${d.title}`}>
            <h5>{d.title}</h5>
            <p>{d.details}</p>
        </MDBCarouselItem>
        ))}
    </MDBCarousel>
  );
}

export default CustomCarousel;