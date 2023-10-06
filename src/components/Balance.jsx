import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <button disabled={true} className="btn btn-success p-2 text-white">
        Your Balance:<strong> {amount} </strong>
      </button>
    </div>
  );
};

export default Balance;
