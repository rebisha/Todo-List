import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class MultiSelect extends Component {
    static availableOption = [
        'apple',
        'banana',
        'grapes',
        'orange'
    ];

    state = {
        commaSeparated: '',
        multiLine: '',
        multiSelect: []
    }

    handleCommaSeparatedChange = (e) => {
        const { value } = e.target;
        const allVal = value
            .split(',')
            .map(item => item.trim())
            .filter(Boolean)

        this.setState({
            commaSeparated : value,
            multiLine: allVal.join('\n'),
            multiSelect: allVal.filter(item => MultiSelect.availableOption.includes(item))
        });
    }

    handleMultiLineChange = (e) => {
        const { value } = e.target;
        const allVal = value
            .split('\n')
            .map(item => item.trim())
            .filter(Boolean)

        this.setState({
            multiLine: value,
            commaSeparated: allVal.join(','),
            multiSelect: allVal.filter(item => MultiSelect.availableOption.includes(item))
        });
    }

    handleMultipleChange = (e) => {
        const allVal = Array.from(e.target.selectedOptions).map(item => item.value);
        console.log(allVal)

        this.setState({
            multiSelect: allVal,
            multiLine : allVal.join('\n'),
            commaSeparated: allVal.join(',')
        })
    }

    render() {
        const { commaSeparated, multiLine, multiSelect } = this.state;
        return (
            <Form>
                <Form.Label>Comma Separated Values</Form.Label>
                <Form.Control
                    type="text"
                    onChange={this.handleCommaSeparatedChange}
                    value={commaSeparated}
                />

                <Form.Label className="mt-3">Multi Line Values</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    onChange={this.handleMultiLineChange}
                    value={multiLine}
                />

                <Form.Label className="mt-3">Multi Select Values</Form.Label>
                <Form.Control
                    as="select" multiple
                    onChange={this.handleMultipleChange}
                    value={multiSelect}
                >
                    {MultiSelect.availableOption.map(option => {
                        return <option key={option}> {option} </option>
                    })}
                </Form.Control>
            </Form>
        );
    }
}

export default MultiSelect;