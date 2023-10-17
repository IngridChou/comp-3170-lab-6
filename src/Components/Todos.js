import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  const startEditing = (taskId) => {
    setEditingTask(taskId);
  };

  const stopEditing = () => {
    setEditingTask(null);
  };

  const updateTodo = (updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTask.id ? { ...todo, title: updatedTask.title } : todo
    );
    setTodos(updatedTodos);
    stopEditing(); // Stop editing after updating task
  };

  function addTodo(todo) {
    const updatedTodos = [...todos, todo];

    setTodos(updatedTodos);
  }

  function removeTodo(task) {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id !== task.id;
    });

    setTodos(updatedTodos);
  }

  function toggleFinished(task) {
    const updatedTodos = todos.map(function (todo) {
      if (todo.id === task.id) {
        todo.finished = !todo.finished;
        return todo;
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggleFinished={toggleFinished}
            setEditing={startEditing}
          />
        ))}
      </ul>
      {editingTask !== null && (
        <div className="edit">
          <TodoForm
            addTodo={addTodo}
            updateTodo={updateTodo}
            initialValue={
              todos.find((todo) => todo.id === editingTask)?.title || ""
            }
            onCancel={stopEditing}
          />
        </div>
      )}
      {!editingTask && <TodoForm addTodo={addTodo} />}
    </div>
  );
}
