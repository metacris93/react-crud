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
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <Badge 
                                firstName={firstName || 'First Name'}
                                lastName={lastName || 'Last Name'}
                                jobTitle={jobTitle || 'Job Title'}
                                email={email || 'Email'}
                                twitterAccount={twitter || '@twitter'}/>
                            <div className="d-flex justify-content-evenly">
                                <Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>Edit</Link>
                                <button onClick={props.onOpenModal} className="btn btn-danger mb-4">Delete</button>
                                <DeleteBadgeModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}>
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}
export default BadgeDetail;