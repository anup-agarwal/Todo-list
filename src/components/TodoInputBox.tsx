import React from "react";

interface ITodoInputBoxProps {
  value: string;
  buttonText: string;
  addTodoHandler: (value: string) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoInputBox: React.FC<ITodoInputBoxProps> = ({
  value,
  buttonText,
  onInputChange,
  addTodoHandler,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        className="inputBox"
        style={{
          boxSizing: "border-box",
          flexGrow: 4,
          height: "50px",
          margin: "0 5px",
          padding: "10px",
          border: "1px solid rgb(189, 189, 189)",
          borderRadius: "5px",
          color: "#616473",
          fontSize: "20px",
          outline: "none",
        }}
        type="text"
        value={value}
        onChange={onInputChange}
      />
      <button
        className="addButton"
        style={{
          flexGrow: 1,
          backgroundColor: "transparent",
          border: "1px solid #00B74A",
          color: "#00B74A",
          borderRadius: "5px",
          cursor: value.trim().length === 0 ? "not-allowed" : "pointer",
        }}
        disabled={value.trim().length === 0}
        onClick={() => addTodoHandler(value)}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TodoInputBox;
