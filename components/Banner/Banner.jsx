import React from "react";
import classnames from "classnames";

export default function Banner({ children, theme }) {
  console.log("children = ", children); //:> xPPP
  let themeClass = theme && `banner-${theme}`;
  console.log("themeClass = ", themeClass); //:> xPPP
  const allClasses = classnames(themeClass, "banner");

  let icon = (
    <img
      src={`./images/${themeClass}.svg`}
      className="banner-icon"
      alt={`${themeClass}-icon`}
    />
  );

  return (
    <div className={allClasses}>
      {icon}
      <div className="banner-p-and-h4">{children}</div>
    </div>
  );
}
