import React, { Component } from 'react';
import footer from '../img/mobile.png';
import android from '../img/android1.png';
import ios from '../img/ios1.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios mobile phone.</p>
                            <div className="app-logo">
                                <img src={android} alt="android" />
                                <img src={ios} alt="ios" />
                            </div> 
                        </div>
                        <div className="footer-col-2">
                            <img src={footer} alt="footer" />
                            <p>Our Purpose Is To Sustainably Make the Pleasure and
                            Benefit of Sports Accessible to the Many.</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">Copyright 2020 - Elvis Chukwuka</p>
                </div>
            </div>
        )
    }
}

export default Footer
