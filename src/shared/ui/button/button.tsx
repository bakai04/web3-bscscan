import cx from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, ReactElement, useState } from "react";
import styles from "./button.module.scss";

export type IButton = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "prefix" | "suffix"> & {
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary" | "ghost";
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  svgOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  icon?: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      type,
      htmlType,
      size,
      className,
      children,
      onClick: propsOnClick,
      svgOnly,
      prefix,
      suffix,
      ...restProps
    },
    ref
  ) => {

    return (
      <button
        className={cx(
          styles.button,
          size === "small" && styles.small,
          size === "medium" && styles.medium,
          size === "large" && styles.large,
          type === "secondary" && styles.secondary,
          type === "ghost" && styles.ghost,
          svgOnly && styles.svg_only,
          className
        )}
        onClick={propsOnClick}
        type={htmlType}
        ref={ref}
        {...restProps}
      >
        {prefix}
        {children}
        {suffix}
      </button>
    );
  }
);

Button.defaultProps = {};
