import React, { Component } from 'react';
import brand1 from '../img/brand1.jpg';
import brand2 from '../img/brand2.jpg';
import brand3 from '../img/brand3.jpg';

class Featured extends Component {
    render() {
        return (
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={brand1} alt="brand1" />
                        </div>
                        <div className="col-3">
                            <img src={brand2} alt="brand2" />
                        </div>
                        <div className="col-3">
                            <img src={brand3} alt="brand3" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured
