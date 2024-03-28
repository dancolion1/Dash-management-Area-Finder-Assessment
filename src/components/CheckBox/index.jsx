import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-gray-300_01 border border-solid checked:border-gray-700 checked:border checked:border-solid checked:bg-gray-900_06 checked:focus:bg-gray-900_06 checked:focus:border-gray-700",
};
const sizes = {
  xs: "",
  sm: "h-[14px] w-[14px] rounded",
  md: "h-[16px] w-[16px] rounded",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "md",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
