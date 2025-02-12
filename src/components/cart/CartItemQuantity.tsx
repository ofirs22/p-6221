import React from "react";

interface CartItemQuantityProps {
  onIncrease: () => void;
  onDecrease: () => void;
}

export const CartItemQuantity: React.FC<CartItemQuantityProps> = ({
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="self-stretch flex items-center gap-[26px] my-auto">
      <button
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="justify-center items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white self-stretch flex min-h-[52px] gap-2.5 w-[52px] h-[52px] my-auto px-2.5 rounded-[103px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/c5782997b3f9568c9ef0054f8c1858a0433019342359cc649e0f902eb5ca4f31?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[13px] self-stretch my-auto"
          alt="Decrease"
        />
      </button>
      <button
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="justify-center items-center shadow-[0px_2px_12px_0px_rgba(183,189,196,0.50)] bg-white self-stretch flex min-h-[52px] gap-2.5 w-[52px] h-[52px] my-auto px-2.5 rounded-[103px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/0a40ddb27832eb893ed47eb5a5c0ec69578b9e91b641205ffd9e284ae4d1f6d3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[13px] self-stretch my-auto"
          alt="Increase"
        />
      </button>
    </div>
  );
};
