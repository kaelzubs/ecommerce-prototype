import React, { Component } from 'react';
import test1 from '../img/elvis.jpg';
import test2 from '../img/kaelzubs.jpg';
import test3 from '../img/elvis.jpg';

export class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.
                            Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={test1} alt="testimony" />
                            <h3>Elvis Chukwuka</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.
                            Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={test2} alt="testimony" />
                            <h3>Kael zubs</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.
                            Send unlimited free texts and make WiFi calls from a free phone number.
                            Download the free app or sign up online to pick your free phone number.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img src={test3} alt="testimony" />
                            <h3>Martins Junior</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial
