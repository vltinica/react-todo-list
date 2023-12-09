import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <input placeholder="Enter new todo" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
