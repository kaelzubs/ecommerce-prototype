import React, { Component } from 'react';
import logo from '../img/mobile.png';
import banner from '../img/Mobile.png';
import cart from '../img/Cart-PNG-Pic.png';
import menus from '../img/menu.png';


class Header extends Component {
    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this)
        
    }
    menuToggle() {
        let MenuItems = document.getElementById("MenuItems");
        if (MenuItems.style.maxHeight === "0px") {
            MenuItems.style.maxHeight = "200px";
        } else {
            MenuItems.style.maxHeight = "0px";
        }
    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src={logo} alt="logo-image" />
                        </div>
                        <nav>
                            <ul id="MenuItems">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                        </nav>
                        <img src={cart} alt="cart" />
                        <img src={menus} alt="menu" onClick={this.menuToggle}
                        className="menu-icon" />
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <h1>Give Your Workout<br /> A New Style!</h1>
                            <p>Success isn't always about greatness
                            It's about consistency. Consistency<br /> hard work gains success.
                            Greatness will come.</p>
                            <a href="" className="btn">Explore Now &#8594;</a>
                        </div>
                        <div className="col-2">
                            <img src={banner} alt="banner-image" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default Header