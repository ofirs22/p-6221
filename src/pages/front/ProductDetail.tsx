import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/productSlice';
import ProductImage from '../../components/front/productDetail/ProductImage.tsx';
import StoreItem from '../../components/front/productDetail/StoreItem.tsx';
import ProductDescription from '../../components/front/productDetail/ProductDescription.tsx';
import ProductBottomDetails from '../../components/front/productDetail/productBottomDetails.tsx';
import ProductShowcase from '../../components/front/packageFront/ProductShowcase';

const MainComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector(selectProducts);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const storeItemIcons = [
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/2c95348f576e2c151d01b16a181e9bc2c93b24f754bc3df859b0fb92d034dd7b?apiKey=3bd4fc55ef394bd184dc9786c01c1445&", iconAlt: "Facebook Icon" },
    { iconSrc: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/48c6d5db99ffa51e69268ba0289eb0bddf82b6c5b8ee88318c22c9244106634c?apiKey=3bd4fc55ef394bd184dc9786c01c1445&", iconAlt: "Twitter Icon"},
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-100">
      <div className="mt-16 max-w-full w-[1105px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <ProductImage imageSrc={product.image} onSale={product.isSale} />
          <StoreItem
            id= {product.id}
            price={product?.price}
            originalPrice={product?.originalPrice}
            name={product?.name}
            categories={product?.categories}
            tags={product?.tags}
            sku={product?.sku}
            socialIcons={storeItemIcons}
            description={product?.shortDescription}
            image= {product?.image}
          />
        </div>
      </div>
      <div className="flex flex-col py-8 mt-20 max-w-full bg-white rounded-xl w-[1105px] max-md:mt-10 mb-5">
        <div className="flex flex-col self-end mr-12 max-w-full text-2xl leading-none text-right text-slate-900 w-[100px] max-md:mr-2.5">
          <div className="self-end">תיאור</div>
          <div className="flex shrink-0 bg-sky-500 h-[3px]" />
        </div>
        <div className="flex flex-col md:flex-row mt-4 mb">
          <div className="w-full md:w-1/2">
            <ProductDescription description={product?.productDetails} />
            <ProductBottomDetails categories={product?.categories} tags={product?.tags} sku={product?.sku} />
          </div>
          <div className="w-full md:w-1/2">
            <ProductDescription description={product?.description} />   
          </div>
          
        </div>
        
      </div>
      
      <div className="w-[1105px] max-w-full mt-10">
        <ProductShowcase />
      </div>
    </div>
  );
};

export default MainComponent;