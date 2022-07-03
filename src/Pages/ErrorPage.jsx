import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

function ErrorPage() {
  return (
    <div>
      <h4>
        Sorry, this page does not exist. Click button to return to home page!
      </h4>
      <Link to="/">
        <Button text={`BACK`} />
      </Link>
      ;
    </div>
  );
}

export default ErrorPage;
