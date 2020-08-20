import React, { Component } from 'react'
import product1 from '../img/product.jpg';
import product2 from '../img/product1.jpg';
import product3 from '../img/product2.jpg';
import product4 from '../img/product3.jpg';


class Products extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <img src={product1} alt="products" />
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
                    <img src={product2} alt="products" />
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
                    <img src={product3} alt="products" />
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
                    <img src={product4} alt="products" />
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
        )
    }
}

export default Products
