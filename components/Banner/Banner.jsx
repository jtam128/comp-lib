import React from "react";
import classnames from "classnames";

export default function Banner({ children, theme }) {
  let themeClass = theme && `Banner-${theme}`;
  const allClasses = classnames(themeClass);

  return (
    <div className={allClasses}>
      <p>{children}</p>
    </div>
  );
}
