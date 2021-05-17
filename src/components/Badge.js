import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            jobTitle,
            twitterAccount,
        } = this.props;
        return (
            <div className="badge">
                <div className="badge_header">
                    <img className="badge_avatar" src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="badge_section-name">
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>{firstName} <br/> {lastName}</h1>
                </div>
                <div className="badge_section-info">
                    <p>{jobTitle}</p>
                    <p>{twitterAccount}</p>
                </div>
                <div className="badge_footer">#platziconf</div>
            </div>
        )
    }
}

export default Badge;