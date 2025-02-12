import React from "react";

export const CartSummary: React.FC = () => {
  return (
    <div className="items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex min-w-60 gap-2.5 text-2xl font-semibold leading-none w-[365px] p-10 rounded-[18px] max-md:px-5">
      <div className="self-stretch flex min-w-60 h-[377px] w-[285px] flex-col items-stretch my-auto">
        <div className="flex w-[227px] max-w-full flex-col items-stretch text-[#05172C] text-right">
          <div>יש 2 מוצרים בעגלה שלך</div>
          <div className="bg-[rgba(0,186,255,1)] flex min-h-[3px] w-full mt-[11px]" />
        </div>
        <div className="bg-[#D2D2D2] flex min-h-px w-full mt-4" />

        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-[#FC4B4E] flex w-full flex-col text-white text-right justify-center mt-4 p-5 rounded-xl">
          <div className="flex w-full items-center gap-[40px_67px] justify-between">
            <div className="self-stretch my-auto">₪7.67</div>
            <div className="self-stretch my-auto">סה״כ חסכת:</div>
          </div>
        </div>

        <div className="items-stretch shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white flex w-full flex-col text-[#05172C] text-right justify-center mt-4 p-5 rounded-xl">
          <div className="flex w-full gap-[34px] justify-between">
            <div>₪21.80</div>
            <div>סה״כ לתשלום:</div>
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

        <div className="w-full text-sm font-normal leading-loose flex-1 mt-4">
          <div className="text-[#05172C] text-right">הערה להזמנה:</div>
          <textarea
            placeholder="הוסיפו כאן הערות"
            className="border border-[color:var(--Shade-1---Gray,#D2D2D2)] w-full gap-5 text-[#264653] flex-1 h-full mt-2.5 p-5 rounded-xl border-solid"
          />
        </div>
      </div>
    </div>
  );
};
