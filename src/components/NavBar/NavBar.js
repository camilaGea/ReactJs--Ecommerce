import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    const [mobile, setMobile] = React.useState(false)
    return(
        <header className='header'>
            <nav className='header-nav'>
                <NavLink to={"/"} className='header-logo'><span>COPITO</span></NavLink>
                <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                    <NavLink to={"/"} className='ul-li' >Home</NavLink>
                                                   
                    <NavLink to={`category/nena`} className='ul-li'>Nena</NavLink>
                                                                              
                    <NavLink to={`category/nene`} className='ul-li'>Nene</NavLink>
                                                                              
                    <NavLink to={`category/bebe`} className='ul-li'>Bebe</NavLink>
                </ul>
                <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
                    {mobile ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                <NavLink to={`/cart`}> <CartWidget/> </NavLink>
            </nav>
      </header >

    );
}
 
export default NavBar

