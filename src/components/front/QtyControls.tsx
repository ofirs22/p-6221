import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { incrementQuantity, decrementQuantity } from '../../store/cartSlice';

interface QtyControlsProps {
  id: string;
  quantity: number;
  variant?: 'mini' | 'cart';
}

export const QtyControls: React.FC<QtyControlsProps> = ({ id, quantity, variant = 'cart' }) => {
  const dispatch = useDispatch();

  if (variant === 'mini') {
    return (
      <div className="relative flex items-center gap-4 px-0 bg-[#f4f5f5] py-3 rounded-full w-full max-w-[200px] h-[48px]">
      <Button 
        onClick={() => dispatch(decrementQuantity(id))}
        className="w-[40px] h-[40px] rounded-full p-0 hover:bg-white"
      >
        <Minus className="h-[13px] w-[13px] text-[#05172C]" />
      </Button>
      <span 
        className="text-[#05172C] min-w-[20px] text-center font-semibold"
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {quantity}
      </span>
      <Button 
        onClick={() => dispatch(incrementQuantity(id))}
        className="w-[60px] h-[60px] rounded-full bg-white shadow-lg hover:bg-white"
      >
        <Plus className="h-[13px] w-[13px] text-[#05172C]" />
      </Button>
    </div>
    )
  }

  return (
    <div className="relative flex items-center gap-4 px-4 bg-[#f4f5f5] py-3 rounded-full w-[175px] h-[48px]">
      <Button 
        onClick={() => dispatch(decrementQuantity(id))}
        className="w-[52px] h-[52px] rounded-full p-0 hover:bg-white"
      >
        <Minus className="h-[13px] w-[13px] text-[#05172C]" />
      </Button>
      <span 
        className="text-[#05172C] min-w-[20px] text-center font-semibold"
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {quantity}
      </span>
      <Button 
        onClick={() => dispatch(incrementQuantity(id))}
        className="absolute top-[-20px] right-[-30px] w-[80px] h-[80px] rounded-full bg-white shadow-[0px_2px_12px_rgba(183,189,196,0.504)]  mr-4 hover:bg-white"
      >
        <Plus className="h-[52px] w-[52px] text-[#05172C]" />
      </Button>
    </div>
  )
}
