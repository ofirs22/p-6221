import * as React from "react";

type ProductImageProps = {
  imageSrc: string;
  onSale: boolean;
};

const ProductImage: React.FC<ProductImageProps> = ({ imageSrc, onSale }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-end px-20 pt-5 text-base text-right whitespace-nowrap rounded-xl min-h-[645px] pb-[585px] shadow-[0px_2px_12px_rgba(183,189,196,0.504)] text-slate-700 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
        <img loading="lazy" src={imageSrc} alt="Product image" className="object-cover absolute inset-0 size-full" />
        {onSale && (
          <div className="absolute top-5 right-0 px-6 py-3 bg-amber-300 rounded-[80px_0px_0px_80px] shadow-[5px_2px_13px_rgba(138,148,159,0.407)] w-[8rem] max-md:pl-5">
            מבצע!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;