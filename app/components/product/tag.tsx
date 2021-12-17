import type * as React from "react";
import clsx from "clsx";

interface ProductTagProps {
  name: string;
  price: string;
  fontSize?: number;
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  fontSize = 32,
}) => {
  return (
    <div className="absolute top-0 left-0 z-20 pr-16 transition-colors duration-500 ease-in-out">
      <h3 className="pt-0 max-w-full w-full text-[2rem] tracking-[0.4px] leading-[2.2em]">
        <span
          className={clsx(
            "py-4 px-6 bg-primary text-primary font-bold min-h-[70px] decoration-clone",
            { "flex pt-6": fontSize < 32 }
          )}
          style={
            fontSize
              ? {
                  fontSize: `${fontSize}px`,
                  lineHeight: `${fontSize}px`,
                }
              : undefined
          }
        >
          {name}
        </span>
      </h3>
      <div className="inline-block px-6 pt-2 pb-4 text-sm font-semibold tracking-wide bg-primary text-accent-9">
        {price}
      </div>
    </div>
  );
};

export { ProductTag };
