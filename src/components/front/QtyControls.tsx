import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { incrementQuantity, decrementQuantity } from '../../store/cartSlice';

interface QtyControlsProps {
  id: string;
  quantity: number;
  size?: 'small' | 'medium' | 'large';
}

export const QtyControls: React.FC<QtyControlsProps> = ({
  id,
  quantity,
  size = 'medium',
}) => {
  const dispatch = useDispatch();

  // Define size configurations
  const sizeConfig = {
    small: {
      container: 'w-[105px] h-[32px] gap-2 px-2 py-1',
      button: 'w-[28px] h-[28px]',
      plusButton: 'w-[50px] h-[50px] right-[-12px] top-[-10px]', // Extends outside
      icon: 'h-[10px] w-[10px]',
      text: 'text-sm',
    },
    medium: {
      container: 'w-[145px] h-[40px] gap-3 px-3 py-2',
      button: 'w-[40px] h-[40px]',
      plusButton: 'w-[70px] h-[70px] right-[-15px] top-[-15px]',
      icon: 'h-[13px] w-[13px]',
      text: 'text-base',
    },
    large: {
      container: 'w-[185px] h-[48px] gap-4 px-4 py-3',
      button: 'w-[52px] h-[52px]',
      plusButton: 'w-[90px] h-[90px] right-[-18px] top-[-18px]',
      icon: 'h-[16px] w-[16px]',
      text: 'text-lg',
    },
  };

  const styles = sizeConfig[size];

  return (
    <div className={`relative flex items-center bg-[#f4f5f5] rounded-full ${styles.container}`}>
      <Button
        onClick={() => dispatch(decrementQuantity(id))}
        className={`${styles.button} rounded-full p-0 hover:bg-white`}
      >
        <Minus className={`${styles.icon} text-[#05172C]`} />
      </Button>

      <span
        className={`text-[#05172C] text-center font-semibold ${styles.text}`}
        style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
      >
        {quantity}
      </span>

      <Button
        onClick={() => dispatch(incrementQuantity(id))}
        className={`absolute bg-white shadow-lg hover:bg-white rounded-full ${styles.plusButton}`}
      >
        <Plus className="w-full h-full text-[#05172C]" />
      </Button>
    </div>
  );
};
