import React from "react";
import { Triangle } from  'react-loader-spinner'

const LoadingComponent = () => {
  return (
    <>
      {/* Page Preloder  */}
      <div id="preloder">
        <div className="loader">
            <Triangle color="#00BFFF" height={80} width={80} />
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
