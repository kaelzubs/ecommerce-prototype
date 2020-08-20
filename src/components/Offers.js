import React, { Component } from 'react';
import offer from '../img/huawei-band-4-design-2.png';

export class Offers extends Component {
    render() {
        return (
            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={offer} alt="offers" className="offer-img" />
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on Local Store</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 features a 39.9% larger
                            (than Mi Band 3) AMOLED color-full-touch display with
                            adjustable brightness, so everything is clear as can.
                            </small>
                            <a href="" className="btn">Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Offers
