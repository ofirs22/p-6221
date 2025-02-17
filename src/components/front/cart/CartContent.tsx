import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Card } from '../../ui/card';

export const CartContent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Card className="p-10 w-[547px]">
      <div className="flex flex-col gap-4">
        <div className="h-[1px] w-full bg-[#D2D2D2]" />

        {/* Cart Items */}
        <div className="flex flex-col gap-[10px]">
          {cart.items.map((item) => (
            <div key={item.id} className="flex items-center gap-5 justify-between">
              {/* Quantity Controls */}
              <button className='bg-white shadow-lg rounded-full w-[52px] h-[52px]'>{item.quantity}</button>

              {/* Product Info */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <h3 
                    className="text-[22px] leading-[25px] font-semibold text-[#05172C]"
                    style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex gap-6">
                    <span 
                      className="text-[22px] leading-[25px] font-semibold text-[#FC4B4E]"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      ₪{item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span 
                        className="text-[22px] leading-[25px] font-semibold text-[#778080] line-through"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        ₪{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-[42px] h-[51px] bg-[#F6F5F5] rounded overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Change Shipping Button */}
        <button 
          className="w-full h-[52px] border border-[#778080] text-[#778080] rounded-full text-[20px] font-normal"
          style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
        >
          שינוי פרטי משלוח
        </button>
      </div>
    </Card>
  );
};
