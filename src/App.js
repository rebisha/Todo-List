import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddTodo from './components/addTodo';
import Todo from './components/todo';

import CounterButton from './components/counterButton';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario Kart' }
    ],
    count: 0
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
    let addTodos = [...this.state.todos, todo];

    this.setState({
      todos: addTodos
    });
  }

  incrementCount = (incrementValue) => {
    this.setState({
      count: this.state.count + incrementValue
    });
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Todo todo={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
        <AddTodo incrementCount={this.incrementCount} addTodo={this.addTodo} />
        <CounterButton incrementCount={this.incrementCount} count={this.state.count} />
      </Container>
    );
  }
}

export default App;
