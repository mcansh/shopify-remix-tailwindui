import clsx from "clsx";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "flat" | "slim" | "ghost" | "naked";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | React.JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props;

  let rootClassName = clsx();
  // s.root,
  // {
  //   [s.ghost]: variant === 'ghost',
  //   [s.slim]: variant === 'slim',
  //   [s.naked]: variant === 'naked',
  //   [s.loading]: loading,
  //   [s.disabled]: disabled,
  // },
  // className

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={buttonRef}
      className={rootClassName}
      disabled={disabled}
      style={{ width, ...style }}
      {...rest}
    >
      {children}
      {loading && <i className="flex pl-2 m-0">...</i>}
    </Component>
  );
});

Button.displayName = "Button";

export { Button };
