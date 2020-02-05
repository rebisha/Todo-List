import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { CommonAction } from "./redux/action";

import AddTodo from "./components/Todo/addTodo";
import CounterButton from "./components/CounterButton/counterButton";
import MultiSelect from "./components/Multiselect/multiSelect";
import StopWatch from "./components/StopWatch/stopWatch";
import Todo from "./components/Todo/todo";
import Search from "./components/IphoneSearch/search";
import MonsterCard from "./components/MonsterCard/monsterCard";
import MonsterSearch from "./components/MonsterCard/monsterSearch";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "buy some milk" },
        { id: 2, content: "play mario Kart" }
      ],
      count: 0,
      timer: 0,
      running: false,
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.props.CommonAction(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          monsters: response
        })
      );
  }

  deleteTodo = id => {
    const todoFilter = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todoFilter
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let addTodos = [...this.state.todos, todo];

    this.setState({
      todos: addTodos
    });
  };

  incrementCount = incrementValue => {
    this.setState({
      count: this.state.count + incrementValue
    });
  };

  onMonsterSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.lapse);
      } else {
        const startTime = Date.now() - this.state.timer;
        this.lapse = setInterval(() => {
          this.setState({
            timer: Date.now() - startTime
          });
        });
      }
      return { running: !state.running };
    });
  };

  handleClearClick = () => {
    clearInterval(this.lapse);

    this.setState({
      timer: 0,
      running: false,
      count: 0
    });
  };

  componentWillUnmount() {
    clearInterval(this.lapse);
  }

  render() {
    const { todos, count, timer, running, monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <Container className="App">
        <div className="todo-container">
          <Todo todo={todos} deleteTodo={this.deleteTodo} />
          <AddTodo
            incrementCount={this.incrementCount}
            addTodo={this.addTodo}
          />
        </div>

        <div className="counter-container">
          <CounterButton
            incrementCount={this.incrementCount}
            count={count}
            handleClearClick={this.handleClearClick}
          />

          <StopWatch
            timer={timer}
            running={running}
            handleRunClick={this.handleRunClick}
            handleClearClick={this.handleClearClick}
          />
        </div>

        <MultiSelect />
        <Search />

        <div className="my-4 monster-container">
          <h1 className="monster-title text-center">Monster Rolodex</h1>
          <MonsterSearch
            onChange={this.onMonsterSearchChange}
            placeholder={"Search monsters"}
          />
          <MonsterCard monsters={filterMonsters} />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    CommonAction: data => dispatch(CommonAction(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
