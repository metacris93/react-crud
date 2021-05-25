import React from 'react';
import './styles/BadgeDetail.css';
import confLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// function useIncreaseCount(max) {
//     const [count, setCount] = React.useState(0);
//     if (count > max) {
//         setCount(0);
//     }
//     return [count, setCount];
// }
function BadgeDetail(props) {
    // const [state, setState] = React.useState();
    //const [count, setCount ] = useIncreaseCount(4);
    
    const {
        id
      , firstName
      , lastName
      , jobTitle
      , email
      , twitter
  } = props.badge;
    return (
        <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{firstName} {lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={firstName || 'First Name'}
                                lastName={lastName || 'Last Name'}
                                jobTitle={jobTitle || 'Job Title'}
                                email={email || 'Email'}
                                twitterAccount={twitter || '@twitter'}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            {/* <button onClick={() => {setCount(count + 1)}} className="btn btn-primary mb-4">Increase count {count}</button> */}
                            <div>
                                <div><Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>Edit</Link></div>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                >
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
export default BadgeDetail;