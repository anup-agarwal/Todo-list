import React from "react";

interface ITodoInputBoxProps {
  value: string;
  buttonText: string;
  onButtonClick: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoInputBox: React.FC<ITodoInputBoxProps> = ({
  value,
  buttonText,
  onButtonClick,
  onInputChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
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
        style={{
          flexGrow: 1,
          backgroundColor: "transparent",
          border: "1px solid #00B74A",
          color: "#00B74A",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TodoInputBox;