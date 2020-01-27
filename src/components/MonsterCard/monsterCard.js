import React from 'react';
import { Card } from 'react-bootstrap';

import './cards.scss';
const MonsterCard = ({ monsters }) => {
    return (
        <div className="container monster-card">
            {
                monsters.map(item => {
                    return (
                        <Card className="col-4" key={item.id}>
                            <Card.Img variant='top' src={`https://robohash.org/${item.id}?set=set2`} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.email}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
            })}
        </div>

    );
}

export default MonsterCard;