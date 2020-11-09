import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => ({
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  });

  getButtonStyle = () => ({
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    curosr: 'pointer',
    float: 'right'
  })

  render() {

    const { id, title } = this.props.todo

    return (
      <div style={this.getStyle()} >
        <p>
          <input type="checkbox" onChange={this.props.markComplete(id)} />
          {' ' + title}
          <button onClick={this.props.delTodo(id)} style={this.getButtonStyle()}>X</button>
        </p>
      </div>
    )
  }
}

// specify what props this component receives
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool
  }),
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
