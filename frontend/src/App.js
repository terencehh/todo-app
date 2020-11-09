import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import AboutComponent from './pages/about/about.component'
import TodoComponent from './pages/todo/todo.component'
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    todos: [],
    currentTodoTitle: '',
    editFlag: false,
    todoToEdit: {}
  }

  componentDidMount() {
    this.retrieveList();
  }

  retrieveList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  }

  // Toggle Complete
  markComplete = item => _ => {
    axios.put(`http://localhost:8000/api/todos/${item.id}/`, { ...item, completed: !item.completed })
      .then(res => this.retrieveList());
    return;
  }

  // Edit Todo - perform validation
  triggerEditTodo = (item) => {
    // basic validation - must not be empty title
    if (item.title.length !== 0) {
      axios.put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.retrieveList());
    }
    return;
  }

  // Delete Todo
  delTodo = id => _ => {
    axios
      .delete(`http://localhost:8000/api/todos/${id}/`)
      .then(res => this.retrieveList());
    return;
  }

  // Add Todo - perform validation
  addTodo = (title) => {
    // basic validation - must not be empty title
    if (title.length !== 0) {
      const item = { title, completed: false }
      axios
        .post("http://localhost:8000/api/todos/", item)
        .then(res => this.retrieveList());
    }
    return;
  }

  triggerEditFlag = (id) => _ => {
    let todoToEdit = this.state.todos.filter(todos => todos.id === id)[0]
    console.log(todoToEdit)
    this.setState({
      todoToEdit: todoToEdit,
      editFlag: true
    })
  }

  // Edit Todo - perform validation
  triggerEditTodo = (item) => {
    // basic validation - must not be empty title
    if (item.title.length !== 0) {
      axios.put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then(res => this.retrieveList());
    }
    return;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={() =>
              <TodoComponent
                todos={this.state.todos}
                addTodo={this.addTodo}
                delTodo={this.delTodo}
                editFlag={this.state.editFlag}
                markComplete={this.markComplete}
                triggerEditFlag={this.triggerEditFlag}
                todoToEdit={this.state.todoToEdit}
                triggerEditTodo={this.triggerEditTodo}
              />} />
            <Route path="/about" component={AboutComponent} />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
