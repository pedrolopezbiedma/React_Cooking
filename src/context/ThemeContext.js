const { createContext } = require("react");

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ color: "#58249c" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
export default ThemeContext;
