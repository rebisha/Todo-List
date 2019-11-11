import React  from 'react';
import { Button } from 'react-bootstrap';

function CounterButton(props) {
    const { incrementCount, count } = props;

    const handleButtonClick = () => {
        incrementCount(5);
    }

    return (
        <Button variant="outline-info"
            onClick={handleButtonClick}
        >
            Counter {count}
        </Button>
    );
}

export default CounterButton;