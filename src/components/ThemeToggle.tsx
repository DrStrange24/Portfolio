import { useTheme } from "../theme/useTheme";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";

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
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">System Default</Tooltip>}
          >
            <FontAwesomeIcon icon={faDesktop} />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("light")}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Light Mode</Tooltip>}
          >
            <FontAwesomeIcon icon={faSun} />
          </OverlayTrigger>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => toggleTheme("dark")}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Dark Mode</Tooltip>}
          >
            <FontAwesomeIcon icon={faMoon} />
          </OverlayTrigger>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
