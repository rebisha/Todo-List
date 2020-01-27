import React  from 'react';
import { Button } from 'react-bootstrap';

const CounterButton = ({incrementCount, count}) => {
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