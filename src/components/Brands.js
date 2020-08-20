import React, { Component } from 'react';
import brand1 from '../img/amaz.png';
import brand2 from '../img/oppo.png';
import brand3 from '../img/coca.png';
import brand4 from '../img/paypal.png';
import brand5 from '../img/philip.jpg';


export default class Brands extends Component {
    render() {
        return (
            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img src={brand1} alt="brands" />
                        </div>
                        <div className="col-5">
                            <img src={brand2} alt="brands" />
                        </div>
                        <div className="col-5">
                            <img src={brand3} alt="brands" />
                        </div>
                        <div className="col-5">
                            <img src={brand4} alt="brands" />
                        </div>
                        <div className="col-5">
                            <img src={brand5} alt="brands" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
