import React, { useState } from "react";
import createTodo from "../apis/createTodo";
import deleteTodo from "../apis/deleteTodo";
import ITodoItem from "../interfaces/ITodoItem";

interface IContextProviderProps {
  items: ITodoItem[];
  addTodoHandler: (todo: ITodoItem) => void;
  deleteTodoHandler: (id: string) => void;
}

const initialContextValue = {
  items: [],
  addTodoHandler: (todo: ITodoItem): void => {},
  deleteTodoHandler: (id: string): void => {},
};

export const TodoContext =
  React.createContext<IContextProviderProps>(initialContextValue);

const TodoContextProvider: React.FC = ({ children }): JSX.Element => {
  const [TodoItemList, setTodoItemList] = useState<ITodoItem[]>([]);

  const addTodoHandler = (todo: ITodoItem) => {
    createTodo(todo)
      .then((_) => setTodoItemList((oldTodoList) => [...oldTodoList, todo]))
      .catch(console.log);
  };

  const deleteTodoHandler = (idToDelete: string) => {
    deleteTodo(idToDelete)
      .then((_) =>
        setTodoItemList(TodoItemList.filter(({ id }) => id !== idToDelete))
      )
      .catch(console.log);
  };

  return (
    <TodoContext.Provider
      value={{ items: TodoItemList, addTodoHandler, deleteTodoHandler }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
