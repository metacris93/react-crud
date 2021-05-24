import React from 'react';
import { Link } from 'react-router-dom';
import header from '../images/badge-header.svg';

class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero-full">
                    <div className="BadgeNew__home">
                        <img src={header} alt="" />
                    </div>
                    <Link to="/badges" className="btn btn-primary">Get Started!</Link>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;
