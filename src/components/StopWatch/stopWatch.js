import React from 'react';
import { Button } from 'react-bootstrap';

const StopWatch = ({timer, running, handleRunClick, handleClearClick}) => {
    return (
        <div className="my-3">
            <h4>{timer}ms</h4>
            <Button className="mx-3" variant="primary" onClick={handleRunClick} >{running ? 'Stop': 'Start'}</Button>
            <Button className="mx-3" variant="success" onClick={handleClearClick}>Clear</Button>
        </div>
    );}

export default StopWatch;