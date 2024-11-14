import { useTheme } from "../theme/useTheme";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Dropdown align="end" hidden>
      <Dropdown.Toggle
        className="theme-icon-button"
        variant="outline-light"
        id="theme-toggle"
        size="sm"
      >
        <FontAwesomeIcon
          icon={
            theme === "dark" ? faMoon : theme === "light" ? faSun : faDesktop
          }
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => toggleTheme("system")}>
          <FontAwesomeIcon icon={faDesktop} className="me-2" />
          System Default
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("light")}>
          <FontAwesomeIcon icon={faSun} className="me-2" />
          Light Mode
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("dark")}>
          <FontAwesomeIcon icon={faMoon} className="me-2" />
          Dark Mode
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
