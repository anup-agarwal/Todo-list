import { AxiosResponse } from "axios";
import React, { Fragment, useEffect, useState } from "react";
import TodoInputBox from "../components/TodoInputBox";
import TodoItems from "../components/TodoItems";
import ITodoItem from "../interfaces/ITodoItem";
import { v4 as uuid } from "uuid";
import createTodo from "../apis/createTodo";
import getTodos from "../apis/getTodos";
import deleteTodo from "../apis/deleteTodo";

const TodoApp: React.FC<{}> = (): JSX.Element => {
  const [TodoItemList, setTodoItemList] = useState<ITodoItem[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodoItem>({
    item: "",
    id: "",
  });

  useEffect(() => {
    getTodos().then((_: AxiosResponse<ITodoItem[]>) => setTodoItemList(_.data));
  }, []);

  const addTodoHandler = () => {
    createTodo(currentTodo)
      .then((_) => {
        setTodoItemList((oldTodoList) => [
          ...oldTodoList,
          { item: currentTodo.item.trim(), id: uuid() },
        ]);
        setCurrentTodo({ item: "", id: "" });
      })
      .catch(console.log);
  };

  const deleteTodoHandler = (idToDelete: string) => {
    deleteTodo(idToDelete)
      .then((_) =>
        setTodoItemList(TodoItemList.filter(({ id }) => id !== idToDelete))
      )
      .catch(console.log);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentTodo((curr) => ({ ...curr, item: event.target.value }));

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
            onButtonClick={addTodoHandler}
            onInputChange={inputChangeHandler}
            value={currentTodo.item}
          />
          <TodoItems items={TodoItemList} onDeleteClick={deleteTodoHandler} />
        </div>
      </div>
    </Fragment>
  );
};

export default TodoApp;
