
import React from "react";
import { CartItem } from "./CartItem";

export const CartList: React.FC = () => {
  return (
    <div className="justify-center items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-[300px] flex-col flex-1 pl-4 pr-4 py-6 rounded-[18px] max-md:max-w-full">
      <div className="flex w-full flex-col text-2xl text-[#05172C] font-semibold text-right leading-none max-md:max-w-full">
        <div className="flex w-[105px] max-w-full flex-col items-stretch">
          <div>עגלת קניות</div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px]" />
        </div>
      </div>
      <div className="self-center flex w-full max-w-[652px] flex-col items-stretch justify-center flex-1 mt-4 max-md:max-w-full">
        <div className="bg-[#D2D2D2] self-center flex min-h-px w-full" />

        <CartItem
          name="חלב"
          currentPrice="₪8.90"
          originalPrice="₪10.90"
          image="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/280a41bb8f8b0ca4d9814b9ae562da1ce00ca6ad09a710daec12476450a4c5af?placeholderIfAbsent=true"
          quantityImage="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/36d9ed80152275ca3fcbfb6ba2722e947634104c1fc9602f6931e074b2c99ee4?placeholderIfAbsent=true"
        />

        <CartItem
          name="ערגליות"
          currentPrice="₪12.90"
          originalPrice="₪18.90"
          image="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/13e031045f4223e33d01c8c2706670fd7b7bcf179e51d9b4e204a2635b63aa78?placeholderIfAbsent=true"
          quantityImage="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5d60a9e5aa1d3c0f0609dcd291a3727efe9466caf2758edd5cf047e52fda844a?placeholderIfAbsent=true"
        />
      </div>
    </div>
  );
};
