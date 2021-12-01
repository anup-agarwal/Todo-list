import Axios, { AxiosResponse } from "axios";
import ITodoItem from "../interfaces/ITodoItem";

const createTodo = (todo: string): Promise<AxiosResponse<ITodoItem>> => {
  return Axios.post<ITodoItem>("/createtodo", { item: todo });
};

export default createTodo;
