import './Navbar.css';
import CartIcon from './CartIcon';
import { NavLink } from 'react-router-dom';

function Navbar () {
    return ( 
        <div className="nav-container">
            <div className="logo">AURA</div>
            <nav className="main-nav">
                <NavLink to="/all" className="nav-items" activeClassName="active">All</NavLink>
                <NavLink to="/women" className="nav-items" activeClassName="active">Women</NavLink>
                <NavLink to="/men" className="nav-items" activeClassName="active">Men</NavLink>
                <NavLink to="/kids" className="nav-items" activeClassName="active">Kids</NavLink>
                    {/* <div className="nav-items active">All</div>
                    <div className="nav-items">Women</div>
                    <div className="nav-items">Men</div>
                    <div className="nav-items">Kids</div> */}
            </nav>
            <div className="cart"><CartIcon></CartIcon></div>
        </div>
    );
}

export default Navbar;