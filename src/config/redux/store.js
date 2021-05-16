<<<<<<< HEAD
import { createStore } from "redux";
import reducer from "./reducer/reducer";
=======
const { createStore } = require("redux");

const initialState = {
  dataBlogs: [],
  name: "Rafi",
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Nur",
    };
  }
  return state;
};
>>>>>>> 74d1ead09a8cca1df3fb1a8cdfe761558a3cacd5

const store = createStore(reducer);

export default store;
