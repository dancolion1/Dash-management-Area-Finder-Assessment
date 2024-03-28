import React from "react";

const sizes = {
  "5xl": "text-xl font-medium",
  xs: "text-[8px] font-light",
  lg: "text-[11px] font-medium",
  "6xl": "text-2xl font-medium md:text-[22px]",
  "7xl": "text-[64px] font-medium md:text-5xl",
  s: "text-[9px] font-medium",
  "2xl": "text-sm font-normal",
  "3xl": "text-base font-normal",
  "4xl": "text-lg font-normal",
  xl: "text-xs font-normal",
  md: "text-[10px] font-normal",
};

const Text = ({ children, className = "", as, size = "3xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_03 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
