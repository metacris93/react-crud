import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };
    handleChange = e => {
        //const nextForm = this.state.form;
        const { target : { value : _value , name: _name } } = e;
        //nextForm[_name] = _value;
        this.setState({
            form: {
                ...this.state.form,
                [_name]: _value
            }
        })
    };
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitterAccount={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChangeBadgeForm={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;