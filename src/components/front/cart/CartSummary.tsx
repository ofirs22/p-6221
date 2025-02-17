
import React from "react";
import { CartSummaryProps } from "../../../types/cartTypes";

export const CartSummary: React.FC<CartSummaryProps> = ({totalItems, totalSavings, totalAmount}) => {
  return (
    <div className="items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-60 gap-2.5 text-2xl font-semibold leading-none w-[365px] p-10 rounded-[18px] max-md:px-5">
      <div className="self-stretch flex min-w-60 w-[285px] flex-col items-stretch my-auto h-full">
        <div className="flex w-[227px] max-w-full flex-col items-stretch text-[#05172C] text-right ml-auto">
          <div>יש {totalItems} מוצרים בעגלה שלך</div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px]" />
        </div>
        <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4" />

        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-[#FC4B4E] flex w-full flex-col text-white text-right justify-center mt-4 p-4 rounded-xl">
          <div className="flex w-full items-center gap-[40px_67px] justify-between">
            {totalSavings && <div className="self-stretch my-auto text-[22px]">₪{totalSavings.toFixed(2)}</div>}
            <div className="self-stretch my-auto text-[18px]">:סה״כ חסכת</div>
          </div>
        </div>

        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex w-full flex-col text-[#05172C] text-right justify-center mt-4 p-4 rounded-xl">
          <div className="flex w-full gap-[34px] justify-between text-[22px]">
            <div>₪{totalAmount.toFixed(2)}</div>
            <div className="text-[18px]">:סה״כ לתשלום</div>
          </div>
        </div>

        <form className="w-full text-sm font-normal leading-loose mt-4">
          <div className="text-[#05172C] text-right">קוד קופון:</div>
          <input
            type="text"
            placeholder="הכניסו כאן קוד קופון"
            className="border border-[color:var(--Shade-1---Gray,#D2D2D2)] w-full gap-5 text-[#264653] mt-2.5 p-5 rounded-xl border-solid"
          />
        </form>

        <div className="w-full text-sm font-normal leading-loose mt-4 flex flex-col flex-grow">
          <div className="text-[#05172C] text-right">הערה להזמנה:</div>
          <textarea
            placeholder="הוסיפו כאן הערות"
            className="border border-[color:var(--Shade-1---Gray,#D2D2D2)] w-full gap-5 text-[#264653] mt-2.5 p-5 rounded-xl border-solid flex-grow min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};