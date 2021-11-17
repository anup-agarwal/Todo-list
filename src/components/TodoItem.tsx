import React from "react";
import ITodoItem from "../interfaces/ITodoItem";

interface ITodoItemProps {
  todoItem: ITodoItem;
  onDeleteClick: (id: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
  todoItem: { item, id },
  onDeleteClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "30px",
        padding: "30px",
        boxSizing: "border-box",
        borderRadius: "5px",
        backgroundColor: "#F0EFE9",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p style={{ color: "#5A5E6D" }}>{item}</p>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          cursor: "pointer",
          padding: "10px",
          borderRadius: "4px",
        }}
        onClick={() => onDeleteClick(id)}
      >
        X
      </div>
    </div>
  );
};

export default TodoItem;
