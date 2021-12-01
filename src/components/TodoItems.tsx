import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContextProvider";
import TodoItem from "./TodoItem";

const TodoItems: React.FC = () => {
  const { items, deleteTodoHandler } = useContext(TodoContext);

  return items.length ? (
    <div
      className="todoItems"
      style={{ overflow: "scroll", scrollbarWidth: "none", maxHeight: "400px" }}
    >
      {items.map((todoItem) => (
        <TodoItem todoItem={todoItem} onDeleteClick={deleteTodoHandler} />
      ))}
    </div>
  ) : (
    <div
      style={{
        color: "#00B74A",
        fontSize: "30px",
        fontWeight: "20px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Great Work! You are all caught up
    </div>
  );
};

export default TodoItems;
