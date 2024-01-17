// Context
import { useThemeContext } from "../hooks/useThemeContext";

// Styles
import "./ThemeSelector.css";

const colors = ["#58249c", "#249c6b", "#b70233"];

const ThemeSelector = () => {
  const { changeColor } = useThemeContext();
  const handleClick = (color) => {
    changeColor(color);
  };
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {colors.map((color) => (
          <div
            style={{ background: color }}
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
