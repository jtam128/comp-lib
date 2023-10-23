import React from "react";
import classnames from "classnames";

export default function Badge({ children, color, variant }) {
  let colorClass = color && `Button-${color}`;
  let variantClass = variant && `Button-${variant}`;

  const allClasses = classnames(variantClass, colorClass);
  return <button className={allClasses}>{children}</button>;
}
