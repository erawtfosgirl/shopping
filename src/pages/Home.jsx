import React from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

const Home = () => {
  return (
    <>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Categories />
        <Products />
      </div>
    </>
  );
};

export default Home;
