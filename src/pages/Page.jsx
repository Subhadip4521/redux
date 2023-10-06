import React from "react";
import Navbar from "../components/Navbar";
import Shop from "../components/Shop";
import { Provider } from "react-redux";
import store from "../state/store";

function Page() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Shop />
      </Provider>
    </div>
  );
}

export default Page;
