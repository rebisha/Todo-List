import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ResultFound = ({iphones}) => {
    return (
        <div className="mb-3">
            {
                iphones.map(item => {
                    return (
                        <ListGroup.Item key={item.id}>
                            <span>Name: {item.name}, </span>
                            <span>Color: {item.color}, </span>
                            <span>Capacity: {item.capacity}, </span>
                            <span>Price: {item.price}</span>
                        </ListGroup.Item>
                    )
                })
            }
        </div>
    );
}

export default ResultFound;