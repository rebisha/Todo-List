import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Todo from './components/todo';
import AddForm from './components/addForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario Kart' }
    ]
  }

  deleteTodo = (id) => {
    const todoFilter = this.state.todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
      todos: todoFilter
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({
      todos
    });
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Todo todo={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
        <AddForm addTodo={this.addTodo} />
      </Container>
    );
  }
}

export default App;
