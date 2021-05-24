import React from 'react';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
    render () {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>Badges not found</h3>
                </div>
            );
        }
        return (
            <ul className="list-unstyled">
                { this.props.badges.map((badge) => {
                    return (
                        <li className="Card__badge" key={badge.id}>
                            <div className="Card__badge-image">
                                <img src={badge.avatarUrl} alt="Logo" />
                            </div>
                            <div className="Card__badge-info">
                                <p><i className="user-icon"></i> {badge.firstName} {badge.lastName}</p>
                                <p><i className="mail-icon"></i> {badge.email}</p>
                                <p><i className="twitter-icon"></i> @{badge.twitter}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
export default BadgesList;