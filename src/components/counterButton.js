import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function CounterButton() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        return setCount(count + 1);
    }

    const consoleLog = () => {
        return console.log('hey');
    }

    return (
        <Button variant="outline-info"
            onClick={incrementCount}
            onKeyUp={consoleLog}
        >
            Counter {count}
        </Button>
    );
}

export default CounterButton;