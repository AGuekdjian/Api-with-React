import React from 'react';
import './header.css';


export default function Header() {
    return (
        <div className='Header'>
            <nav className='navbar navbar-light bg-dark'>
                <div className='container-fluid d-flex justify-content-center'>
                    <form className='d-flex justify-content-center'>
                    <input className='form-control me-2 rounded-pill border-info' type="text" placeholder="Search" aria-label="Search" id="search"/>
                    <button className='btn btn-outline-info rounded-pill' type="submit" id="btn">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}