import React, { useState } from "react";

const Todo = ({ todo }) => {
  const { text, id, completed } = todo;

  const [isCompleted, setIsCompleted] = useState(completed);

  const setCheck = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div
      data-testid={`todo-test-${id}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={() => setCheck()}
        />
      </label>
      <p>{text}</p>
    </div>
  );
};

export default Todo;
