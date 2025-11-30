import React from "react";

const Button = ({ children, onCLick, className }) => {
  return (
    <button
      onClick={onCLick}
      className={` ${className} inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 border rounded-md px-8 w-full bg-[#284E4C] hover:bg-[#284E4C]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
