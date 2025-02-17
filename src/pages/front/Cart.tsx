import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cartSlice';
import Banners from '../../components/front/homepage/Banners';
import ProductShowcase from '../../components/front/packageFront/ProductShowcase';
import { CartSummary } from '../../components/front/cart/CartSummary';
import ActionButton from '../../components/front/cart/ActionButton';
import { CartList } from '../../components/front/cart/CartList';

const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);
  console.log(totalAmount, "totalAmount");

  return (
    <div className='bg-[#f4f5f5] pt-5'>
      <div className="mx-auto max-w-[1100px] w-full max-md:mt-10 bg-[#f4f5f5]">
        <div className="flex items-stretch gap-[30px] flex-nowrap">
          <div className="w-full md:w-[38%]">
            <CartSummary 
              totalAmount={totalAmount.totalPrice} 
              totalItems={totalAmount.totalItems}
              totalSavings={totalAmount.totalSaving}  
            />
          </div>
          <div className="w-full md:w-[62%]">
            <CartList cartItems={cartItems} />
          </div>
        </div>
        <ActionButton />
      </div>
      <div className="w-full -mx-4 sm:mx-0">
        <Banners />
      </div>
      <div className="w-full -mx-4 sm:mx-0">
        <ProductShowcase />
      </div>
    </div>
  );
};

export default Cart;