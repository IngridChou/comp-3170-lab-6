import Todos from "./Todos";

export default function Todo(props) {
  const todo = props.todo;

  function handleDelete() {
    props.remove(todo);
  }

  function handleStatusChange() {
    props.toggleFinished(todo);
  }

  return (
    <li className="todo">
      <div className="todo-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={todo.finished}
            />
            {todo.finished === true ? <del>{todo.title}</del> : todo.title}
          </span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <button className="edit-btn" onClick={() => props.setEditing(todo.id)}>
          edit
        </button>
        <button>remove</button>
      </div>
    </li>
  );
}
