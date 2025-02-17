
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import ProductBottomDetails from './productBottomDetails';
import { CartItemProps } from '@/types/cartTypes';
import { toast } from 'sonner';
import { Button } from '../../../components/ui/button';
import { Plus, Minus } from 'lucide-react';

type StoreItemProps = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  categories: string[];
  tags: string[];
  sku: string;
  socialIcons: { iconAlt: string; iconSrc: string }[];
  description: string;
  image: string;
};

const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  originalPrice,
  categories,
  tags,
  sku,
  socialIcons,
  description,
  image
}) => {
  const [productQty, setProductQty] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem: CartItemProps = {
      id,
      name,
      originalPrice,
      price,
      quantity: productQty,
      image
    };
    console.log('Adding item to cart:', cartItem);
    dispatch(addItem(cartItem));
    toast.success('המוצר נוסף לעגלה בהצלחה');
    console.log('Cart item dispatched');
  };
  console.log(id)
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-end self-end max-w-full w-[402px]">
          <div className="flex gap-9 text-right">
            {originalPrice && (
              <div className="mt-3.5 text-3xl font-bold text-gray-500 leading-[50px] line-through">₪{originalPrice}</div>
            )}
            <div className="flex flex-col">
              <div className="self-end text-2xl font-semibold leading-none text-slate-900">{name}</div>
              <div className="my-auto text-3xl font-bold text-red-500 leading-[50px]">₪{price}</div>
              <div className="self-start mt-1.5 ml-5 text-base text-slate-700 max-md:ml-2.5">מחיר ליחידה</div>
            </div>
          </div>
          <div className="flex gap-10 pl-6 mt-11 text-lg font-bold whitespace-nowrap rounded-3xl bg-blend-normal text-slate-700 max-md:pl-5 max-md:mt-10">
            {/* <button
              className="my-auto"
              onClick={() => setProductQty(prev => {
                if (prev === 1) return 1;
                return prev - 1;
              })}
            >-</button>
            <div className="flex gap-5">
              <div className="my-auto">{productQty}</div>
              <button
                className="flex items-center justify-center bg-white rounded-full h-[52px] shadow-[0px_2px_15px_rgba(183,189,196,0.571)] w-[52px]"
                onClick={() => setProductQty(prev => prev + 1)}
              >+</button> */}
                  <div className="flex items-center gap-6 bg-[#F4F5F5] px-4 py-3 rounded-lg">
                    <Button 
                        className="my-auto"
                        onClick={() => setProductQty(prev => {
                          if (prev === 1) return 1;
                          return prev - 1;
                        })}
                    >
                      <Minus className="h-3 w-3 text-[#05172C]" />
                    </Button>
                    <span className="text-[#05172C] min-w-[20px] text-center">{productQty}</span>
                    <Button 
                      className="flex items-center justify-center bg-white rounded-full h-[52px] shadow-[0px_2px_15px_rgba(183,189,196,0.571)] w-[52px]"
                      onClick={() => setProductQty(prev => prev + 1)}
                    >
                      <Plus className="h-3 w-3 text-[#05172C]" />
                    </Button>
                  </div>
            </div>
          </div>
          <div className="flex gap-6 items-center self-stretch mt-12 max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <div key={index} className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-white shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]">
                <img loading="lazy" src={icon.iconSrc} alt={icon.iconAlt} className="object-contain self-stretch my-auto aspect-square w-[13px]" />
              </div>
            ))}
            <div className="flex flex-col self-stretch my-auto text-lg text-white min-w-[240px] w-[250px]">
              <div
                className="flex gap-5 justify-between px-5 pt-3 pb-5 bg-sky-500 rounded-3xl max-md:px-5 cursor-pointer"
                onClick={handleAddToCart}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/b9e1181743ba6b72e1a9d2667f2722ce297ec4875756b815209a672cd7c954e7?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
                  alt="Cart icon"
                  className="object-contain shrink-0 self-start aspect-[1.17] w-[21px]"
                />
                <div>הוספה לעגלה</div>
              </div>
            </div>
          </div>
          <ProductBottomDetails categories={categories} tags={tags} sku={sku} />
        </div>
        <div className="flex shrink-0 mt-9 h-px bg-neutral-300 max-md:max-w-full" />
        <div className="mt-9 ml-3.5 text-base leading-6 text-right text-slate-700 max-md:max-w-full">{description}</div>
      </div>

  );
};

export default StoreItem;
