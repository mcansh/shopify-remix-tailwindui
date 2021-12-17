import * as React from "react";
import { Form, Link } from "remix";
import type { CollectionQuery } from "~/graphql";
import { Button } from "./button";

import bagIconUrl from "~/assets/bag.svg";

interface Props {
  collections: CollectionQuery["collections"];
}

const Searchbar: React.VFC<{ id?: string }> = ({ id = "search" }) => {
  return (
    <div className="relative w-full text-sm text-base transition-colors duration-150 border bg-accent-0 border-accent-2">
      <Form method="get" action="/search">
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          name="q"
          className="w-full px-3 py-2 pr-10 transition duration-150 ease-in-out bg-transparent appearance-none placeholder:text-accent-3 focus:outline-none focus:shadow-outline-normal sm:min-w-[300px]"
          placeholder="Search for products..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </div>
      </Form>
    </div>
  );
};

const UserNav: React.VFC = () => {
  let cartItemsCount = 0;

  let itemClassName = [
    "ml-6 cursor-pointer relative transition ease-in-out duration-100 flex items-center outline-none text-primary",
    "focus:text-accent-6 focus:transition focus:scale-110 focus:duration-100",
    "first:ml-0",
    "focus:outline-none active:outline-none",
  ].join(" ");

  return (
    <nav className="relative flex items-center">
      <ul className="flex flex-row items-center h-full justify-items-end">
        <li className={itemClassName}>
          <Button
            className={itemClassName}
            variant="naked"
            onClick={() => {
              console.log("toggle sidebar, set sidebar to CART_VIEW");
              // setSidebarView("CART_VIEW");
              // toggleSidebar();
            }}
            aria-label={`Cart items: ${cartItemsCount}`}
          >
            {/* <Bag /> */}
            <svg className="w-5 h-5">
              <use href={`${bagIconUrl}#bag`} />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute flex items-center justify-center text-xs font-bold border rounded-full border-accent-1 bg-secondary text-secondary right-3 top-3 px-[2.5px] min-h-[1.25rem] min-w-[1.25rem]">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </li>
        {/* <li className={itemClassName}>
          <Link to="/wishlist" onClick={closeSidebarIfPresent} aria-label="Wishlist">
              <Heart />
          </Link>
        </li>
        <li className={itemClassName}>
          {customer ? (
            <DropdownMenu />
          ) : (
            <button
              className={s.avatarButton}
              aria-label="Menu"
              onClick={() => openModal()}
            >
              <Avatar />
            </button>
          )}
        </li>
        <li className={s.mobileMenu}>
          <Button
            className={itemClassName}
            variant="naked"
            onClick={() => {
              setSidebarView("MOBILEMENU_VIEW");
              toggleSidebar();
            }}
            aria-label="Menu"
          >
            <Menu />
          </Button>
        </li> */}
      </ul>
    </nav>
  );
};

const Header: React.VFC<Props> = ({ collections }) => {
  return (
    <div className="sticky top-0 z-40 transition-all duration-150 ease-in-out bg-primary min-h-[74px]">
      <div className="px-6 mx-auto max-w-8xl">
        <div className="relative flex flex-row justify-between py-4">
          <div className="flex items-center flex-1">
            <Link
              to="/"
              className="duration-100 ease-in-out transform border rounded-full cursor-pointer hover:shadow-md hover:scale-105"
            >
              <Logo className="w-8 h-8" />
            </Link>
            <nav className="hidden ml-6 space-x-4 lg:block">
              <Link
                to="/search"
                className="inline-flex items-center leading-6 transition duration-75 ease-in-out cursor-pointer text-accent-5 hover:text-accent-9 focus:outline-none focus:text-accent-8"
              >
                All
              </Link>
              {collections.edges.map((collection) => (
                <Link
                  to={collection.node.handle}
                  key={collection.node.handle}
                  className="inline-flex items-center leading-6 transition duration-75 ease-in-out cursor-pointer text-accent-5 hover:text-accent-9 focus:outline-none focus:text-accent-8"
                >
                  {collection.node.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="justify-center flex-1 hidden lg:flex">
            <Searchbar />
          </div>
          <div className="flex items-center justify-end flex-1 space-x-8">
            <UserNav />
          </div>
        </div>
        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div>
      </div>
    </div>
  );
};

const Logo: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="var(--primary)"
      />
    </svg>
  );
};

export { Header };
