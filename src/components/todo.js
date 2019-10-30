import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Todo = ({todo, deleteTodo}) => {
    const todoList = todo.length ? (
        todo.map(todo => {
            return (
                <ListGroup.Item
                    key={todo.id}
                    onClick={() => {deleteTodo(todo.id)}}
                    >
                    {todo.content}
                </ListGroup.Item>
            )
        })
    ) : (
        <ListGroup.Item className="center">You have no todo's left</ListGroup.Item>
    );

    return (
        <div className="todo-list mb-3">
            <h1> Todo List</h1>
            <ListGroup>
                {todoList}
            </ListGroup>
        </div>
    );
}

export default Todo;