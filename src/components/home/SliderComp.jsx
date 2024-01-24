import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center gap-5">
          <div>
            <div className="text-6xl font-bold">Best Shoes in here</div>
            <div className="text-lg my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              consectetur iste, excepturi ullam doloremque vitae numquam vero
              praesentium deserunt velit eveniet tempore quam ipsum repellendus,
              vel voluptatibus recusandae dolore cum.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[150px] h-14 flex justify-center items-center bg-gray-200 hover:bg-gray-300">
              Shop
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-womens-shoes-q2Nz01.png"
            alt="Image"
          />
        </div>
        <div className="!flex items-center gap-5">
          <div>
            <div className="text-6xl font-bold">Best Shoes in here</div>
            <div className="text-lg my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              consectetur iste, excepturi ullam doloremque vitae numquam vero
              praesentium deserunt velit eveniet tempore quam ipsum repellendus,
              vel voluptatibus recusandae dolore cum.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[150px] h-14 flex justify-center items-center bg-gray-200">
              Shop
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b112da7-e7c2-4364-977e-1f19f8aa929b/air-force-1-low-x-premium-goods-womens-shoes-pShMNj.png"
            alt="Image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
