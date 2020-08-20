import React, { Component } from 'react';
import prod1 from '../img/prod.jpg';
import prod2 from '../img/prod2.jpg';
import prod3 from '../img/prod3.jpeg';
import prod4 from '../img/prod4.jpg';
import prod5 from '../img/prod5.jpg';
import prod6 from '../img/prod6.jpg';
import prod7 from '../img/prod7.jpg';
import prod9 from '../img/prod9.jpg';

export class Latest extends Component {
    render() {
        return (
            <div>
                <h2 className="title">Latest Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={prod1} alt="products" />
                        <h4>Smart Mobile Phone 1</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod2} alt="products" />
                        <h4>Smart Mobile Phone 2</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod3} alt="products" />
                        <h4>Smart Mobile Phone 3</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod4} alt="products" />
                        <h4>Smart Mobile Phone 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod5} alt="products" />
                        <h4>Smart Mobile Phone 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod6} alt="products" />
                        <h4>Smart Mobile Phone 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod7} alt="products" />
                        <h4>Smart Mobile Phone 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                    <div className="col-4">
                        <img src={prod9} alt="products" />
                        <h4>Smart Mobile Phone 4</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Latest
