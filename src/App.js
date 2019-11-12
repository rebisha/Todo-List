import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import AddTodo from './components/addTodo';
import CounterButton from './components/counterButton';
import StopWatch from './components/stopWatch';
import Todo from './components/todo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario Kart' }
    ],
    count: 0,
    timer: 0,
    running: false
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

  handleRunClick = () => {
    this.setState(state => {
      if(state.running) {
        clearInterval(this.lapse);
      } else {
        const startTime = Date.now() - this.state.timer;
        this.lapse = setInterval(() => {
          this.setState({
            timer: Date.now() - startTime
          })
        })
      }
      return {running: !state.running}
    })
  }

  handleClearClick = () => {
    clearInterval(this.lapse);

    this.setState({
      timer: 0,
      running: false
    })
  }

  componentWillUnmount() {
    clearInterval(this.lapse);
  }

  render() {
    return (
      <Container>
        <div className="App">
          <Todo todo={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
        <AddTodo
          incrementCount={this.incrementCount}
          addTodo={this.addTodo}
        />

        <CounterButton
          incrementCount={this.incrementCount}
          count={this.state.count}
        />

        <StopWatch
          timer={this.state.timer}
          running={this.state.running}
          handleRunClick={this.handleRunClick}
          handleClearClick={this.handleClearClick}
        />
      </Container>
    );
  }
}

export default App;
