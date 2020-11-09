import React from 'react'
import PropTypes from 'prop-types';
import './todo-item.component.css'

const TodoItem = ({ todoItem, markComplete, delTodo, triggerEditFlag }) => {
  const { id, title, completed } = todoItem

  return (
    <div className='todo' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <p>
        <input type="checkbox"
          checked={todoItem.completed}
          onClick={markComplete(todoItem)} />
        {' ' + title}
        <button onClick={triggerEditFlag(id)} className='customButton edit'>Edit</button>

        <button onClick={delTodo(id)} className='customButton delete'>X</button>
      </p>
    </div >
  )
}

export default TodoItem;

// specify what props this component receives
// TodoItem.propTypes = {

//   todo: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     completed: PropTypes.bool
//   }),
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// };
