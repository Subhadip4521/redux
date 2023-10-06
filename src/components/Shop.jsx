import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const balance = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <>
      <h2
        className="container mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Deposit / Withdraw Your Money:
      </h2>
      <div
        className="container mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              withdrawMoney(100);
            }}
          >
            -
          </button>
          <span className="mx-2">
            Update Balance: <strong>{balance}</strong>
          </span>
          <button
            className="btn btn-success"
            onClick={() => {
              depositMoney(100);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
