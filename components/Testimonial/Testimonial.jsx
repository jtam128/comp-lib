import React from "react";
import classnames from "classnames";

export default function Banner({ children, name, title }) {
  let logo = (
    <img
      src="./images/testimonial-logo.svg"
      className="testimonial-logo"
      alt="testimonial-logo"
    />
  );

  return (
    <div className="testimonial">
      {logo}
      <div>
        {children}
        <div className="testimonial-content">
          <p className="test-name">{name}</p>
          <p className="divider"> / </p>
          <p className="test-title">{title}</p>
        </div>
      </div>
    </div>
  );
}
