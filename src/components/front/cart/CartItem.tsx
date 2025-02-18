
import React from "react";
import { QtyControls } from "../QtyControls";
import { useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../../../store/cartSlice";
import  Heart  from "../../Heart";
import { Trash2 } from "lucide-react";

interface CartItemProps {
  id: string
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  quantity,
}) => {
  const dispatch = useDispatch();
  console.log(id,name,price,originalPrice,image,quantity)
  return (
    <article className="bg-white shadow-[0px_2px_12px_rgba(183,189,196,0.504)] flex w-full items-center gap-5 justify-between mt-[30px] px-4 py-4 rounded-xl max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-center">
        
        <button 
          onClick={() => dispatch(removeItem(id))}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-6 h-6" />
        </button>
        <button className="ml-4 text-gray-500 hover:text-gray-700">
          <Heart id={id} entity='product' size={'small'} />
        </button>
        <QtyControls 
          id={id} 
          quantity={quantity}
          size="medium"
          onIncrement={(id) => dispatch(incrementQuantity(id))}
          onDecrement={(id) => dispatch(decrementQuantity(id))}
        />
      </div>
      <div className="flex items-center ml-auto">
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
          <div className="text-gray-500">
            {originalPrice && <span className="line-through">${originalPrice.toFixed(2)}</span>}
            <span className="ml-2 text-red-500">${price.toFixed(2)}</span>
          </div>
        </div>
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded ml-4" />
      </div>
    </article>
  );
};