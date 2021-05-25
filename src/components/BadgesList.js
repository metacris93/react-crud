import React from 'react';
import { Link } from 'react-router-dom';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredResults] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase().includes(query.toLowerCase());
        });
        setFilteredResults(result);
    }, [ badges, query ]);

    return {query, setQuery, filteredBadges};
}

function BadgesList(props) {
    const {query, setQuery, filteredBadges} = useSearchBadges(props.badges);
    
    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter badges</label>
                    <input type="text" className="form-control" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
                </div>
                <h3>Badges not found</h3>
            </div>
        );
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter badges</label>
                <input type="text" className="form-control" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
            </div>
            <ul className="list-unstyled">
                { filteredBadges.map((badge) => {
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
                            <div className="Card__badge-label">
                                <Link to={`/badges/${badge.id}`}><i className="eye-icon"></i></Link>
                                <Link to={`/badges/${badge.id}/edit`}><i className="edit-icon"></i></Link>
                                <Link to={`/badges/${badge.id}/edit`}><i className="delete-icon"></i></Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
// class BadgesList extends React.Component {
//     render () {
//         if (this.props.badges.length === 0) {
//             return (
//                 <div>
//                     <h3>Badges not found</h3>
//                 </div>
//             );
//         }
//         return (
//             <ul className="list-unstyled">
//                 { this.props.badges.map((badge) => {
//                     return (
//                         <li className="Card__badge" key={badge.id}>
//                             <div className="Card__badge-image">
//                                 <img src={badge.avatarUrl} alt="Logo" />
//                             </div>
//                             <div className="Card__badge-info">
//                                 <p><i className="user-icon"></i> {badge.firstName} {badge.lastName}</p>
//                                 <p><i className="mail-icon"></i> {badge.email}</p>
//                                 <p><i className="twitter-icon"></i> @{badge.twitter}</p>
//                             </div>
//                             <div className="Card__badge-label">
//                                 <Link to={`/badges/${badge.id}`}><i className="eye-icon"></i></Link>
//                                 <Link to={`/badges/${badge.id}/edit`}><i className="edit-icon"></i></Link>
//                                 <Link to={`/badges/${badge.id}/edit`}><i className="delete-icon"></i></Link>
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         );
//     }
// }
export default BadgesList;