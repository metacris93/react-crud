import React from 'react';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/platziconf-logo.svg';
import api from '../api';
import md5 from 'md5';
import PageLoading from '../components/PageLoading';
class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        }
    };
    fetchData = async e => {
        this.setState({
            loading: true,
            error: null
        });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({
                loading: false,
                form: data
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    };
    componentDidMount() {
        this.fetchData();
    }
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({
                loading: false
            });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    };
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="" />
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
                                titleForm="Edit Attendant"
                                onChangeBadgeForm={this.handleChange}
                                formValues={this.state.form}
                                onBadgeSubmit={this.handleSubmit}
                                error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;