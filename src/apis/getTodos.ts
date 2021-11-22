import { AxiosResponse } from "axios";
import Axios from "axios";
import ITodoItem from "../interfaces/ITodoItem";

const getTodos = (): Promise<AxiosResponse<ITodoItem[]>> => {
  return Axios.get<ITodoItem[]>("/todos");
};

export default getTodos;
