
import React from "react";
import { CartItemQuantity } from "./CartItemQuantity";

interface CartItemProps {
  name: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  quantityImage: string;
}

export const CartItem: React.FC<CartItemProps> = ({
  name,
  currentPrice,
  originalPrice,
  image,
  quantityImage,
}) => {
  return (
    <article className="bg-white shadow-[0px_2px_12px_rgba(183,189,196,0.504)] flex w-full items-center gap-5 justify-between mt-[30px] px-4 py-4 rounded-xl max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-center gap-4 max-md:w-full">
        <CartItemQuantity
          onIncrease={() => console.log("increase")}
          onDecrease={() => console.log("decrease")}
        />
        <img
          loading="lazy"
          src={quantityImage}
          className="aspect-[2.87] object-contain w-[120px] max-sm:w-[90px] rounded-[0px_0px_0px_0px]"
          alt={name}
        />
      </div>
      <div className="flex items-center gap-4 max-md:w-full max-md:justify-between">
        <div className="flex flex-col text-xl max-sm:text-lg font-semibold">
          <div className="text-[#05172C] mb-3">{name}</div>
          <div className="flex items-center gap-4">
            <div className="text-[#FC4B4E]">{currentPrice}</div>
            <div className="text-[#77808A] line-through">{originalPrice}</div>
          </div>
        </div>
        <div className="h-[60px] w-px bg-[#D2D2D2] mx-4" />
        <img
          loading="lazy"
          src={image}
          className="aspect-[0.84] object-contain w-[60px] max-sm:w-[50px] rounded-[9px]"
          alt={`${name} product`}
        />
      </div>
    </article>
  );
};
