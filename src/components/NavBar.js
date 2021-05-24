import React from 'react';
import './styles/NavBar.css'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <Link className="navbar__brand" to="/">
                        <img className="navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Plazi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;