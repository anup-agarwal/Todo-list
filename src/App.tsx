import TodoApp from "./containers/TodoApp";
import "./App.css";
import Axios from "axios";

Axios.defaults.baseURL = process.env.REACT_APP_API;

Axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const App = () => <TodoApp />;

export default App;
