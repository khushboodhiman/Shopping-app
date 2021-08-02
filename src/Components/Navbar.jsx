import React, { Component } from 'react';
import './Navbar.css';
import Cart from './Cart';

class Navbar extends Component {
    render() { 
        return ( 
            <div className="nav-container">
                <div className="logo">AURA</div>
                <nav className="main-nav">
                        <div className="nav-items active">All</div>
                        <div className="nav-items">Women</div>
                        <div className="nav-items">Men</div>
                        <div className="nav-items">Kids</div>
                </nav>
                <div className="cart"><Cart></Cart></div>
            </div>
        );
    }
}
 
export default Navbar;