import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class AddForm extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit= { this.handleSubmit } >
                    <label>Add new todo:</label>
                    <FormControl onChange= { this.handleChange } />
                </form>
            </div>
        );
    }
}

export default AddForm;