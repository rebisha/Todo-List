import React from "react";
import { ListGroup } from "react-bootstrap";
import "./todo.scss";

const Todo = ({ todo, deleteTodo }) => {
  const todoList = todo.length ? (
    todo.map(todo => {
      return (
        <ListGroup.Item
          key={todo.id}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {todo.content}
        </ListGroup.Item>
      );
    })
  ) : (
    <ListGroup.Item className="center">You have no todo's left</ListGroup.Item>
  );

  return (
    <div className="todo-list mb-3">
      <div className="wrapper">
        <h1> Todo List</h1>
        <h6>
          <a
            href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React lifecycle methods diagram
          </a>
        </h6>
      </div>

      <ListGroup>{todoList}</ListGroup>
    </div>
  );
};

export default Todo;
