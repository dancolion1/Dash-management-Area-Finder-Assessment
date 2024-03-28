import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-md",
};
const variants = {
  fill: {
    indigo_A200_7c: "bg-indigo-A200_7c text-gray-50",
    blue_gray_900: "bg-blue_gray-900",
    gray_100_02: "bg-gray-100_02",
    gray_900_06: "bg-gray-900_06 text-gray-50",
    indigo_50: "bg-indigo-50 text-white-A700",
    gray_100: "bg-gray-100 shadow-md text-green-800",
    deep_orange_50: "bg-deep_orange-50 shadow-md text-red-600",
    white_A700: "bg-white-A700 shadow-sm text-blue_gray-800",
    gray_50: "bg-gray-50 text-gray-900_03",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
  outline: {
    gray_600: "border-gray-600 border-b border-solid text-gray-900_03",
    blue_gray_50: "border-blue_gray-50 border-l border-b border-r border-solid",
    blue_A700: "border-blue-A700 border border-solid text-blue-A700",
    indigo_A200: "border-indigo-A200 border border-solid text-blue-A700",
    gray_300_01: "border-gray-300_01 border border-solid shadow-sm text-gray-50",
    blue_A700_b2: "border-blue-A700_b2 border border-solid",
  },
};
const sizes = {
  lg: "h-[32px] px-[7px]",
  md: "h-[30px] px-3 text-base",
  "2xl": "h-[40px] px-2.5",
  "3xl": "h-[45px] px-[35px] text-base",
  xs: "h-[24px]",
  "5xl": "h-[50px] px-[35px] text-base",
  xl: "h-[35px] px-[21px] text-base",
  "4xl": "h-[50px] px-[13px]",
  sm: "h-[24px] px-2 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["lg", "md", "2xl", "3xl", "xs", "5xl", "xl", "4xl", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_A200_7c",
    "blue_gray_900",
    "gray_100_02",
    "gray_900_06",
    "indigo_50",
    "gray_100",
    "deep_orange_50",
    "white_A700",
    "gray_50",
    "blue_A700",
    "gray_600",
    "blue_gray_50",
    "indigo_A200",
    "gray_300_01",
    "blue_A700_b2",
  ]),
};

export { Button };
