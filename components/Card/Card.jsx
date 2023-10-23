import React from "react";
import classnames from "classnames";

export default function Card({ children, icon, iconBackgroundColor }) {
  const defaultIcon = (
    <img src={`./images/cloud-upload.svg`} alt="cloud-upload-icon" />
  );

  return (
    <div className="card">
      <div
        className="card-icon"
        style={{ backgroundColor: iconBackgroundColor || "#3F75FE" }}
      >
        {icon || defaultIcon}
      </div>
      <div className="card-contents">{children}</div>
    </div>
  );
}
