import * as React from "react";

type ProductImageProps = {
  imageSrc: string;
  onSale: boolean;
};

const ProductImage: React.FC<ProductImageProps> = ({ imageSrc, onSale }) => {
  return (
    <div className="flex flex-col w-11/12 max-w-6xl mx-auto"> {/* Adjusted width and added margins */}
      <div className="flex relative flex-col grow items-end pt-5 text-base text-right whitespace-nowrap rounded-xl pb-[300px] shadow-[0px_2px_12px_rgba(183,189,196,0.504)] text-slate-700">
        <img 
          loading="lazy" 
          src={imageSrc} 
          alt="Product image" 
          className="object-contain absolute inset-0 w-full h-full" // Changed to object-contain
        />
        {onSale && (
          <div className="absolute top-5 right-0 px-6 py-3 bg-amber-300 rounded-[80px_0px_0px_80px] shadow-[5px_2px_13px_rgba(138,148,159,0.407)] w-[8rem]">
            מבצע!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;