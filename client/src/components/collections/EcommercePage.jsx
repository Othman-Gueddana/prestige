import React from 'react';
import shoes from "./127887670_3807489879285596_2826582191633935912_o.jpg"
import shoes1 from "./128068896_3807489875952263_5483591570191344619_o.jpg"
import pinkbag from "./128904233_3807489882618929_3388196942013962194_o.jpg"
import greyteeshirt from "./129634839_4219301344764297_1889887035687169126_n.jpg"
import blueshort from "./129744573_3554255648006384_3181018814608508067_n.jpg"
import blackshirt from "./131629607_778589412869055_5174710883090801370_o.jpg"

import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBIcon,
    MDBTooltip,
} from 'mdbreact';

const EcommercePage = () => {
    return (
        <section className='text-center mr-1'>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
            <p className='grey-text text-center w-responsive mx-auto mb-5'>
            </p>
            <MDBRow>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={shoes}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            max-height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Denim</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Denim</a>
                                </strong>
                                <br></br>
                                <span className='float-left font-weight-bold price'>
                                    <strong  >49$</strong>
                                </span>
                            </MDBCardTitle>
                            <br></br>
                            <MDBCardFooter className='rating'>
                                <div className="container">
                                    <div className="star-widget">
                                        <input type="radio" name="rate" id="rate-50" />
                                        <label for="rate-50" className="fas fa-star"></label>
                                        <input type="radio" name="rate" id="rate-40" />
                                        <label for="rate-40" className="fas fa-star"></label>
                                        <input type="radio" name="rate" id="rate-30" />
                                        <label for="rate-30" className="fas fa-star"></label>
                                        <input type="radio" name="rate" id="rate-20" />
                                        <label for="rate-20" className="fas fa-star"></label>
                                        <input type="radio" name="rate" id="rate-10" />
                                        <label for="rate-10" className="fas fa-star"></label>
                                    </div>
                                </div>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={shoes1}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Shoes</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>High heels</a>
                                </strong>
                            </MDBCardTitle>
                            <div className="container">
                                <div className="star-widget">
                                    <input type="radio" name="rate" id="rate-51" />
                                    <label for="rate-51" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-41" />
                                    <label for="rate-41" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-31" />
                                    <label for="rate-31" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-21" />
                                    <label for="rate-22" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-11" />
                                    <label for="rate-11" className="fas fa-star"></label>
                                </div>
                            </div>
                            <MDBCardText>hello.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong>89$</strong>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={pinkbag}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Outwear</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Brown coat</a>
                                </strong>
                            </MDBCardTitle>
                            <div className="container">
                                <div className="star-widget">
                                    <input type="radio" name="rate" id="rate-5" />
                                    <label for="rate-5" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-4" />
                                    <label for="rate-4" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-3" />
                                    <label for="rate-3" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-2" />
                                    <label for="rate-2" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-1" />
                                    <label for="rate-1" className="fas fa-star"></label>
                                </div>
                            </div>
                            <MDBCardText>hello.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong>59$</strong>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={greyteeshirt}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Outwear</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Brown coat</a>
                                </strong>
                            </MDBCardTitle>
                            <div className="container">
                                <div className="star-widget">
                                    <input type="radio" name="rate" id="rate-5" />
                                    <label for="rate-5" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-4" />
                                    <label for="rate-4" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-3" />
                                    <label for="rate-3" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-2" />
                                    <label for="rate-2" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-1" />
                                    <label for="rate-1" className="fas fa-star"></label>
                                </div>
                            </div>
                            <MDBCardText>hello.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong>59$</strong>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={blueshort}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Outwear</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Brown coat</a>
                                </strong>
                            </MDBCardTitle>
                            <div className="container">
                                <div className="star-widget">
                                    <input type="radio" name="rate" id="rate-5" />
                                    <label for="rate-5" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-4" />
                                    <label for="rate-4" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-3" />
                                    <label for="rate-3" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-2" />
                                    <label for="rate-2" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-1" />
                                    <label for="rate-1" className="fas fa-star"></label>
                                </div>
                            </div>
                            <MDBCardText>hello.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong>59$</strong>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-lg-5 mb-4'>
                    <MDBCard cascade narrow ecommerce>
                        <MDBCardImage
                            cascade
                            src={blackshirt}
                            top
                            alt='sample photo'
                            overlay='white-slight'
                            height="300px"
                            max-width="300px"
                        />
                        <MDBCardBody cascade className='text-center'>
                            <a href='#!' className='grey-text'>
                                <h5>Outwear</h5>
                            </a>
                            <MDBCardTitle>
                                <strong>
                                    <a href='#!'>Brown coat</a>
                                </strong>
                            </MDBCardTitle>
                            <div className="container">
                                <div className="star-widget">
                                    <input type="radio" name="rate" id="rate-5" />
                                    <label for="rate-5" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-4" />
                                    <label for="rate-4" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-3" />
                                    <label for="rate-3" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-2" />
                                    <label for="rate-2" className="fas fa-star"></label>
                                    <input type="radio" name="rate" id="rate-1" />
                                    <label for="rate-1" className="fas fa-star"></label>
                                </div>
                            </div>
                            <MDBCardText>hello.</MDBCardText>
                            <MDBCardFooter className='px-1'>
                                <span className='float-left font-weight-bold'>
                                    <strong>59$</strong>
                                </span>
                            </MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </section >
    );
};

export default EcommercePage;