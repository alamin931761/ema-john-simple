import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo" />

            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;