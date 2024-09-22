import React from "react";

const Wrapper = ({ children, className }) => {
    return (
        <div
             className={`w-full max-w-[1280px] px-0 md:p-10 mx-auto  ${
                className || " "}`}
        >
         
          {children}
        </div>
    );
};

export default Wrapper;