import React from 'react';

class BadgeForm extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     twitter: ''
    // };
    // handleChange = e => {
    //     const { target : { value : _value , name: _name } } = e;
    //     this.setState({
    //         [_name]: _value
    //     })
    // };
    handleClick = e => {
        console.log("clicked");
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("SUBMIT");
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label>First Name</label>
                        <input onChange={this.props.onChangeBadgeForm} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
                    </div>
                    <div className="mb-3">
                        <label>Last Name</label>
                        <input onChange={this.props.onChangeBadgeForm} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input onChange={this.props.onChangeBadgeForm} className="form-control" type="email" name="email" value={this.props.formValues.email} />
                    </div>
                    <div className="mb-3">
                        <label>Job Title</label>
                        <input onChange={this.props.onChangeBadgeForm} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="mb-3">
                        <label>Twitter</label>
                        <input onChange={this.props.onChangeBadgeForm} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}
export default BadgeForm;
