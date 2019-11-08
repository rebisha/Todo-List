import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import CounterButton from './counterButton';

class AddTodo extends Component {
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
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className="mb-3">
                <form onSubmit= {this.handleSubmit} >
                    <label>Add new todo:</label>
                    <FormControl onChange= {this.handleChange} value={this.state.content} onKeyUp />
                </form>
                <CounterButton />
            </div>
        );
    }
}

export default AddTodo;