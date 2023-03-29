import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error</h1>
      <h2>404</h2>
      <Link
        to={"/"}
        className="transition duration-300 hover:underline underline-offset-8 decoration-2"
      >
        Go back to home page
      </Link>
    </div>
  );
};

export default Error;
