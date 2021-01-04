import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import "./home.css";
import suit from "../../photos/suit.jpg"

import photo from "../../photos/photo.jpg";
import photoo from "../../photos/photoo.jpg";



const CarouselPage = () => {
    return (
        <MDBCarousel
            interval={3000}
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="carousel-holder"
        >
            <MDBCarouselInner >
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src={photo}
                            alt="First slide"
                        />
                        <MDBMask overlay="black-light" />
                    </MDBView>
                    <MDBCarouselCaption>
                        {/* <h3 className="h3-responsive">Light mask</h3>
                        <p>First text</p> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img

                            className="d-block w-100"
                            src={suit}
                            alt="Second slide"
                        />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                    <MDBCarouselCaption>
                        {/* <h3 className="h3-responsive">Strong mask</h3>
                        <p>Second text</p> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img
                            className="d-block w-100"
                            src={photoo}
                            alt="Third slide"
                        />
                        <MDBMask overlay="black-slight" />
                    </MDBView>
                    <MDBCarouselCaption>
                        {/* <h3 className="h3-responsive">Slight Mast</h3>
                        <p>Third text</p> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;