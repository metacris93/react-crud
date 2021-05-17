import React from 'react';
import './styles/NavBar.css'
import logo from '../images/logo.svg';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <a className="navbar__brand" href="/">
                        <img className="navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="font-weight-light">Plazi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar;