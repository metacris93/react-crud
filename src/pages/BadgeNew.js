import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import md5 from 'md5';
class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
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
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true,
            error: null
        });
        try {
            this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`;
            await api.badges.create(this.state.form);
            this.setState({
                loading: false
            });
        } catch (error) {
            console.log(error.message);
            this.setState({
                loading: false,
                error: error
            });
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email || 'Email'}
                                twitterAccount={this.state.form.twitter || '@twitter'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChangeBadgeForm={this.handleChange}
                                formValues={this.state.form}
                                onBadgeSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;