import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/NavBar.css'
import logo from '../images/logo.svg';

function NavBar() {
        const expression = /badges/gi;
        const location = useLocation();
        const res = location.pathname.match(expression);
        const path = res?.[0];
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <Link className="float-start navbar__brand" to="/">
                        <img className="navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                    { path !== "badges" && 
                        <Link className="float-end navbar__brand" to="/badges">
                            <strong><span className="font-weight-bold">Badges</span></strong>
                        </Link>
                    }
                </div>
            </div>
        );
}

export default NavBar;