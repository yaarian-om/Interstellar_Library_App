import React from "react";

const Toast_Failed = ({ message }) => {
  return (
    <div className="toast toast-end">
      <div className="alert bg-danger">
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default Toast_Failed;
