import { useTheme } from "@mui/material";
import React from "react";
import "./Switch.css";

export const Switch = (props) => {
  const theme = useTheme();

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          onChange={(e) => props.toggleTheme(e.target.checked)}
          type="checkbox"
          className="checkbox"
          checked={theme.palette.mode !== "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
