import React, { Component } from 'react';
import AddTodoBar from '../../components/add-todo-bar/add-todo-bar.component'
import EditTodoBar from '../../components/edit-todo-bar/edit-todo-bar.component'
import TodoItem from '../../components/todo-item/todo-item.component'

class TodoComponent extends Component {
  render() {
    // pass our todos state into Todos Component as a prop
    const { todos, addTodo, delTodo, markComplete, editFlag, triggerEditFlag, todoToEdit, triggerEditTodo } = this.props;
    return (
      <div>
        <AddTodoBar addTodo={addTodo} />
        {todos.map((todo, i) => <TodoItem key={i} todoItem={todo} markComplete={markComplete} delTodo={delTodo} triggerEditFlag={triggerEditFlag} />)}

        {editFlag ?
          <EditTodoBar todoToEdit={todoToEdit} triggerEditTodo={triggerEditTodo} />
          : ''}

      </div>
    )
  }
}

export default TodoComponent;

// // specify what props this component receives
// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// }