import React from 'react';
import {NavLink} from "react-router-dom";
import {BiBasket} from "react-icons/bi";
import Navbar from "../Bar/NavBar";

function Header(props){
    return(
        <header className="App-header">
            <img src="https://cdn.worldvectorlogo.com/logos/logo-pink.svg" className="logo"/>
            <div className="links">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/shop">
                    Shop
                </NavLink>

                <NavLink to="/women">
                    Women
                </NavLink>
                <NavLink to="/men">
                    Men
                </NavLink>

            </div>
            <div className="icons">
                <a href="#">
                    <BiBasket/>
                </a>
                <a href="#">
                    <Navbar/>
                </a>

            </div>
        </header>
    )
}

export default Header