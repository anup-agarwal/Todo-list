import Axios from "axios";
import ITodoItem from "../interfaces/ITodoItem";

const createTodo = (todo: ITodoItem): Promise<ITodoItem> => {
  return Axios.post("/createtodo", { name: todo });
};

export default createTodo;
