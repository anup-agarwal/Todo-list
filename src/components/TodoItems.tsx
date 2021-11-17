import ITodoItem from "../interfaces/ITodoItem";
import TodoItem from "./TodoItem";

interface ITodoItemsProps {
  items: ITodoItem[];
  onDeleteClick: (id: string) => void;
}

const TodoItems: React.FC<ITodoItemsProps> = ({ items, onDeleteClick }) => {
  return (
    <div
      className="todoItems"
      style={{ overflow: "scroll", scrollbarWidth: "none", maxHeight: "400px" }}
    >
      {items.length ? (
        items.map((todoItem) => (
          <TodoItem todoItem={todoItem} onDeleteClick={onDeleteClick} />
        ))
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
      )}
    </div>
  );
};

export default TodoItems;
