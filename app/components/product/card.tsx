import type * as React from "react";
import { Link } from "remix";
import clsx from "clsx";

import type { ProductsQuery } from "~/graphql";
import { formatMoney } from "~/lib/format-money";

import { ProductTag } from "./tag";

interface Props {
  product: ProductsQuery["products"]["edges"][number];
  noNameTag?: boolean;
  variant?: "default" | "slim" | "simple";
  imgProps?: {
    width?: number;
    height?: number;
  };
}

const ProductCard: React.FC<Props> = ({
  product,
  imgProps,
  noNameTag = false,
  variant = "default",
}) => {
  const price = formatMoney(product.node.priceRange.minVariantPrice.amount);
  let image = product.node.images.edges[0].node;

  return (
    <Link
      to={`/product/${product.node.handle}`}
      className={clsx(
        "box-border relative inline-block w-full h-full max-h-full overflow-hidden transition-transform ease-linear bg-center bg-no-repeat bg-cover cursor-pointer bg-accent-1 group",
        {
          "bg-transparent relative overflow-hidden box-border":
            variant === "slim",
        }
      )}
      aria-label={product.node.title}
    >
      {variant === "slim" && (
        <>
          <div className="absolute inset-0 top-0 left-0 z-20 flex items-center justify-end pr-16 mr-8 transition-colors duration-500 ease-in-out">
            <span className="inline-block p-3 text-xl font-bold break-words bg-accent-9 text-accent-0">
              {product.node.title}
            </span>
          </div>
          {product.node?.images && (
            <div>
              <img
                src={image.transformedSrc}
                alt={product.node.title || "Product Image"}
                height={320}
                width={320}
                {...imgProps}
              />
            </div>
          )}
        </>
      )}

      {variant === "simple" && (
        <>
          {!noNameTag && (
            <div className="absolute top-0 left-0 z-20 pr-16 transition-colors duration-500 ease-in-out">
              <h3 className="max-w-full w-full transition-colors ease-in-out duration-500 text-[2rem] tracking-[0.4px] pt-2 text-lg leading-10 -mt-1">
                <span>{product.node.title}</span>
              </h3>
              <div className="px-6 py-4 text-sm font-bold transition-colors duration-500 ease-in-out bg-primary text-primary decoration-clone">
                {`${price} ${product.node.priceRange.minVariantPrice.currencyCode}`}
              </div>
            </div>
          )}
          <div className="flex items-center justify-center min-h-full overflow-hidden">
            {product.node?.images && (
              <div className="min-w-full">
                <img
                  alt={product.node.title || "Product Image"}
                  className="transition-transform duration-500 transform group-hover:scale-[1.2625]"
                  src={image.transformedSrc}
                  height={540}
                  width={540}
                  {...imgProps}
                />
              </div>
            )}
          </div>
        </>
      )}

      {variant === "default" && (
        <>
          <ProductTag
            name={product.node.title}
            price={`${price} ${product.node.priceRange.minVariantPrice.currencyCode}`}
          />
          <div className="flex items-center justify-center min-h-full overflow-hidden">
            {product.node?.images && (
              <div className="min-w-full">
                <img
                  alt={product.node.title || "Product Image"}
                  className="object-cover transition-transform duration-500 transform scale-120 group-hover:scale-[1.2625]"
                  src={image.transformedSrc}
                  height={540}
                  width={540}
                  {...imgProps}
                />
              </div>
            )}
          </div>
        </>
      )}
    </Link>
  );
};

export { ProductCard };
