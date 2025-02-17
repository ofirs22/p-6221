import * as React from "react";

type ProductDescriptionProps = {
  description: string;
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-row-reverse gap-3 mt-9 text-base text-slate-700 mr-5">
      <div className="flex flex-col items-start w-full max-md:auto max-md:max-w-full">
        <div className="text-right text-slate-700 max-md:mt-10 pl-5">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;