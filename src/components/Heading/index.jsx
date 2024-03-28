import React from "react";

const sizes = {
  "3xl": "text-9xl font-semibold md:text-5xl",
  "2xl": "text-[64px] font-bold md:text-5xl",
  xl: "text-xl font-semibold",
  s: "text-[10px] font-bold",
  md: "text-sm font-semibold",
  xs: "text-[7px] font-semibold",
  lg: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_03 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
