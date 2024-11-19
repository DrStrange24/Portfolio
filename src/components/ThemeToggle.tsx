import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, useTheme } from ".";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Dropdown align="end">
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
      <Dropdown.Menu className="theme-dropdown-menu">
        <Dropdown.Item onClick={() => toggleTheme("system")}>
          <Tooltip tooltip="System Default">
            <FontAwesomeIcon icon={faDesktop} />
          </Tooltip>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("light")}>
          <Tooltip tooltip="Light Mode">
            <FontAwesomeIcon icon={faSun} />
          </Tooltip>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("dark")}>
          <Tooltip tooltip="Dark Mode">
            <FontAwesomeIcon icon={faMoon} />
          </Tooltip>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
