import React, { useState } from "react";
import createTodo from "../apis/createTodo";
import deleteTodo from "../apis/deleteTodo";
import ITodoItem from "../interfaces/ITodoItem";

interface IContextProviderProps {
  items: ITodoItem[];
  addTodoHandler: (todo: string) => void;
  deleteTodoHandler: (id: string) => void;
  setTodoItemListFromAPI: (items: ITodoItem[]) => void;
}

const initialContextValue = {
  items: [],
  addTodoHandler: (todo: string): void => {},
  deleteTodoHandler: (id: string): void => {},
  setTodoItemListFromAPI: (items: ITodoItem[]): void => {},
};

export const TodoContext =
  React.createContext<IContextProviderProps>(initialContextValue);

const TodoContextProvider: React.FC = ({ children }): JSX.Element => {
  const [TodoItemList, setTodoItemList] = useState<ITodoItem[]>([]);

  const addTodoHandler = (todo: string) => {
    createTodo(todo)
      .then((res) =>
        setTodoItemList((oldTodoList) => [...oldTodoList, res.data])
      )
      .catch(console.log);
  };

  const deleteTodoHandler = (idToDelete: string) => {
    deleteTodo(idToDelete)
      .then((_) =>
        setTodoItemList(TodoItemList.filter(({ id }) => id !== idToDelete))
      )
      .catch(console.log);
  };

  const setTodoItemListFromAPI = (items: ITodoItem[]): void => {
    setTodoItemList(items);
  };

  return (
    <TodoContext.Provider
      value={{
        items: TodoItemList,
        addTodoHandler,
        deleteTodoHandler,
        setTodoItemListFromAPI,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
