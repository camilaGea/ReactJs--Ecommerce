import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
 
function NavBar(){
    return(
        <header className="header">
        <nav className='navbar navbar-expand-lg nav-color'>
            <div className='container-fluid '>
                <p className='navbar-brand text-dark pe-5 mt-2'>COPITOS</p>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav'>
                        <NavLink to={"/"} className='nav-link active' aria-current="page">Home</NavLink>
                                                   
                        <NavLink to={`category/nena`} className='nav-link'>Nena</NavLink>
                                                   
                        <NavLink to={`category/nene`} className='nav-link'>Nene</NavLink>
                                                   
                        <NavLink to={`category/bebe`} className='nav-link'>Bebe</NavLink>
                    </ul>
                </div>
                <NavLink to={`/cart`}>
                    <CartWidget/>
                </NavLink>
            </div>
        </nav>
    </header>
    );
}
 
export default NavBar

