import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm,TodoList} from './components/todo';
import {addTodo, generateID} from './lib/todoHelpers'

class App extends Component {
  state = {
    todos: [
      {id:1, name:'create react app', isComplete: true},
      {id:2, name:'build it', isComplete: false},
      {id:3, name:'save it in github', isComplete: true},
      {id:4, name:'share it', isComplete: false}
    ],
    currentTodo: ''
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateID
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }
  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please submit a todo item'
    })
  }
  handleInputChange = (evt) => {
    this.setState({
      currentTodo : evt.target.value
    })
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo React App</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
