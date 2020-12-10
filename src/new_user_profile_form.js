import React from 'react';

class NewUserForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: null,
            description: 'There was a farmer who had a dog and Bingo was his name-o.',
            sexualpreference: 'yes',
            errormessage: ''
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)){
            alert("Age must be a number");
            this.setState({age: null});
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === 'age') {
            if(val !== '' && !Number(val)){
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        let header = '';
        if (this.state.firstname && this.state.lastname){
        header = <h1>Hello {this.state.firstname} {this.state.lastname}!</h1>;
        }
        else {
            header = '';
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                {header}
                <p>Enter your first name:</p>
                <input
                    type='text'
                    name='firstname'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your last name:</p>
                <input
                    type='text'
                    name='lastname'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <select value={this.state.sexualpreference}>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </select>
                <br/>
                <input
                    type='submit'
                />
                <br/>
                {this.state.errormessage}
                <textarea value={this.state.description} />
            </form>
        );
    }
}

export default NewUserForm