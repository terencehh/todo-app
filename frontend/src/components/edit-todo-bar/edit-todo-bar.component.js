import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EditTodoBar extends Component {

  state = {
    newTitle: '',
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.triggerEditTodo({ id: this.props.todoToEdit.id, title: this.state.newTitle, completed: this.props.todoToEdit.completed })
    this.setState({ newTitle: '' })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="newTitle"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Edit Todo..."
          value={this.state.newTitle}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default EditTodoBar;
