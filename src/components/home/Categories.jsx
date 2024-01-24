import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-5">
      <div className="pb-1 text-xl font-semibold">Categories</div>
      {categories?.map((category, index) => (
        <div className="text-lg py-2 cursor-pointer hover:bg-gray-200" key={index}>{category}</div>
      ))}
    </div>
  );
};

export default Categories;
