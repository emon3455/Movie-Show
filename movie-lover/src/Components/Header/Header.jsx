import React from 'react';

const Header = () => {
    return (
        <header className='bg-dark'>

            <nav className="navbar  bg-dark container-lg" data-bs-theme="dark">
            <div className="container-fluid ">
                <a className="navbar-brand text-white">Movie Lover</a>
                <div className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-warning" type="submit">Search</button>
                </div>
            </div>
            </nav>
            
        </header>
    );
};

export default Header;