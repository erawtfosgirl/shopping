import React, { useState } from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

const Home = () => {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex gap-3">
        <Categories setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </>
  );
};

export default Home;
