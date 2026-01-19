import { Link } from "@tanstack/react-router";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/analitycs"
          activeProps={{
            className: "font-bold",
          }}
        >
          Analitycs
        </Link>
        <Link
          to="/oauth/callBack"
          activeProps={{
            className: "font-bold",
          }}
        >
          oauth
        </Link>
      </div>
    </div>
  );
};

export default Header;
