import React, { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTodo([...todo, { task: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const taskDone = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed; // toggle completed status
    setTodo(updatedTodo);
  };

  const removeTask = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-base-content m-36">Tasks</h1>

      <div className="mb-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-center"
        >
          <input
            className="input w-4xl h-16 text-xl focus:outline-hidden"
            type="text"
            name="Add Task"
            placeholder="Add Task"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn btn-primary w-24 mt-8" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className="">
        <ul className="flex flex-col">
          {todo.map((task, index) => {
            return (
              <li
                key={index}
                className={`flex text-sm justify-between pl-20 items-center w-3xl my-4 bg-base-200 h-16 border-1 border-accent font-normal text-start rounded-box${
                  task.completed ? " line-through" : ""
                } ${
                  task.completed
                    ? "border-b-2 border-dashed border-secondary"
                    : ""
                }`}
              >
                {task.task}
                <div className="flex flex-row justify-evenly w-36">
                  <button
                    className="btn btn-success"
                    onClick={() => taskDone(index)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => removeTask(index)}
                  >
                    -
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
