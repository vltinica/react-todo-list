import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};
