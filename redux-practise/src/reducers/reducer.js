const istate = {
  name: "Myth",
  wishes: ["eat", "code"],
};
const reducer = (state = istate, action) => {
  if (action.type === "change-name") {
    return {
      ...state,
      name: action.payload,
    };
  } else return state;
};

export default reducer;
