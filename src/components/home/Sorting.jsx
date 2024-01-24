import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="my-5 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="border px-3 py-2 outline-none"
        name=""
        id=""
      >
        <option selected disabled value="">
          Select
        </option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  );
};

export default Sorting;
