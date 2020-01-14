import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ResultNotFound = () => {
    return (
        <div className="mb-3">
            <ListGroup.Item>
                Sorry result not found. Try again.
            </ListGroup.Item>
        </div>
    );
}

export default ResultNotFound;