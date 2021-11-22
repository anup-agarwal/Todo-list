import Axios from "axios";

const deleteTodo = (id: string): Promise<{}> => {
  return Axios.delete(`/todo/${id}`);
};

export default deleteTodo;
