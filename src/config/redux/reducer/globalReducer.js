const initialState = {
  name: "Rafi",
};

const gLobalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Nur",
    };
  }
  return state;
};

export default gLobalReducer;
