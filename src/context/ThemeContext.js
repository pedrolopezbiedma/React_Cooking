const { createContext, useReducer } = require("react");

const ThemeContext = createContext();

const initialState = {
  color: "#58249c",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ color: state.color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;
