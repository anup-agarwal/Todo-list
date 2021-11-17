import ITodoItem from "../interfaces/ITodoItem";

interface ITodoItemsProps {
  items: ITodoItem[];
  onDeleteClick: (id: string) => void;
}

const TodoItems: React.FC<ITodoItemsProps> = ({ items, onDeleteClick }) => {
  return (
    <div
      style={{ overflow: "scroll", scrollbarWidth: "none", maxHeight: "400px" }}
    >
      {items.length ? (
        items.map(({ id, item }) => (
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
