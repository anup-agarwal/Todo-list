import { AxiosResponse } from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import TodoInputBox from "../components/TodoInputBox";
import TodoItems from "../components/TodoItems";
import { TodoContext } from "../contexts/TodoContextProvider";
import ITodoItem from "../interfaces/ITodoItem";
import { v4 as uuid } from "uuid";
import getTodos from "../apis/getTodos";

const TodoApp: React.FC<{}> = (): JSX.Element => {
  const initialCurrentTodo = {
    item: "",
    id: "",
  };
  const [currentTodo, setCurrentTodo] = useState<ITodoItem>(initialCurrentTodo);
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    getTodos().then((_: AxiosResponse<ITodoItem[]>) => console.log(_.data));
  }, []);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentTodo((curr) => ({ ...curr, item: event.target.value }));

  const addTodoHandler = (value: string): void => {
    const newTodo: ITodoItem = { item: value, id: uuid() };
    todoContext.addTodoHandler(newTodo);
    setCurrentTodo(initialCurrentTodo);
  };

  return (
    <Fragment>
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "10vh",
          backgroundColor: "white",
          height: "80vh",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            color: "#616473",
            textAlign: "center",
            padding: "30px 0",
          }}
        >
          Todo List
        </h1>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TodoInputBox
            buttonText={"Add"}
            onInputChange={inputChangeHandler}
            value={currentTodo.item}
            addTodoHandler={addTodoHandler}
          />
          <TodoItems />
        </div>
      </div>
    </Fragment>
  );
};

export default TodoApp;
