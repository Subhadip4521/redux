import React from "react";
import Balance from "./Balance";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container-fluid"
        >
          <div>
            <a
              className="navbar-brand"
              style={{ fontWeight: "bold", fontSize: "25px" }}
              href="/"
            >
              State Bank of Victus
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            style={{ display: "flex", justifyContent: "flex-end", marginRight:"10px"}}
            id="navbarSupportedContent"
          >
            <Balance />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
