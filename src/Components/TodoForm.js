import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      title: title,
      finished: false,
      id: nanoid()
    };
    props.addTodo(newTodo);

    setTitle("");
  }
  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Add new task..."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
