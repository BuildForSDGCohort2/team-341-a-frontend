import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

export default function Spinner(props) {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
        <div id='loader' className={promiseInProgress ? "centered" : "fadeOut"}>
            <div className="spinner"></div>
        </div>
    )
  );
};
