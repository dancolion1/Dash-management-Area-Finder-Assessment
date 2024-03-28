import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-md",
};
const variants = {
  fill: {
    gray_50_03: "bg-gray-50_03 text-gray-900_04",
    gray_50: "bg-gray-50",
    gray_900_02: "bg-gray-900_02 text-gray-50",
    gray_900_06: "bg-gray-900_06 text-gray-50",
  },
};
const sizes = {
  lg: "h-[50px] pl-3 pr-[35px]",
  sm: "h-[45px] px-[13px] text-sm",
  xs: "h-[36px] pl-3 pr-[35px] text-[10px]",
  md: "h-[50px] pl-3 pr-[35px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "md",
      color = "gray_50_03",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["lg", "sm", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50_03", "gray_50", "gray_900_02", "gray_900_06"]),
};

export { Input };
