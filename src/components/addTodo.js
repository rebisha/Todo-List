import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }


    handleChange = (e) => {
        this.props.incrementCount(1);
        this.setState({
            content: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="mb-3">
                <form onSubmit= {this.handleSubmit} >
                    <label>Add new todo:</label>
                    <FormControl onChange= {this.handleChange} value={this.state.content}  />
                </form>
            </div>
        );
    }
}

export default AddTodo;