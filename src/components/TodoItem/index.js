import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div className="todo-item">
      <li>
        <p className="title">{title}</p>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
