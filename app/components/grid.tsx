import * as React from "react";
import clsx from "clsx";

interface GridProps {
  className?: string;
  layout?: "A" | "B" | "C" | "D" | "normal";
  variant?: "default" | "filled";
}

const Grid: React.FC<GridProps> = ({
  className,
  layout = "A",
  children,
  variant = "default",
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-0 lg:grid-cols-3 lg:grid-rows-2 product_grid_root",
        {
          ["layoutA"]: layout === "A",
          ["layoutB"]: layout === "B",
          ["layoutC"]: layout === "C",
          ["layoutD"]: layout === "D",
          ["layoutNormal"]: layout === "normal",
          ["default"]: variant === "default",
          ["filled"]: variant === "filled",
        },
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return {
            ...child,
            props: {
              ...child.props,
              className: clsx(
                child.props.className,
                "row-span-1 bg-transparent box-border overflow-hidden h-[500px] max-h-[800px] lg:col-span-1 lg:h-[inherit]"
              ),
            },
          };
        }
        return child;
      })}
    </div>
  );
};

export { Grid };
