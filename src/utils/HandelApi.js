import axios from "axios";

const baseUrl = "https://siddhant51-todo-list-mern.onrender.com";

const getAllTodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ---> ", data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/save`, { text }).then((data) => {
    console.log(data);
    getAllTodo(setTodo);
    setText("");
  });
};

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllTodo, addTodo, deleteTodo, updateTodo };
