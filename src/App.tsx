import TodoApp from "./containers/TodoApp";
import "./App.css";
import Axios from "axios";
import TodoContextProvider from "./contexts/TodoContextProvider";

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

const App = () => (
  <TodoContextProvider>
    <TodoApp />
  </TodoContextProvider>
);

export default App;
