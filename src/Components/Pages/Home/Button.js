import React from "react";

const Button = () => {
  return (
    <div className="sticky  bottom-0 w-full  flex justify-between bg-stone-200 overflow-hidden ">
      <div>
        <button class="btn btn-neutral">Delete</button>
      </div>
      <div>
        <button class="btn btn-neutral">Mail</button>
      </div>
    </div>
  );
};

export default Button;
