import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../../../types/listsType';
import { removeProductFromList } from '../../../store/listSlice';
import { RootState } from '../../../store';
import { Product } from '../../../types/productTypes';
import { QtyControls } from '../QtyControls';
import { Trash2 } from 'lucide-react';
import { incrementQuantity, decrementQuantity } from '../../../store/cartSlice';
import { useMobile } from '../../../hooks/use-mobile';

interface ListItemProps {
  list: List;
  onDelete: (id: string) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ list, onDelete }) => {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const listProducts = products.filter(product => 
    list.products.some(listProduct => listProduct.productId === product.id)
  );

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProductFromList({ 
      listId: list.id, 
      products: { productId, quantity: 1 } 
    }));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decrementQuantity(productId));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex justify-between items-center">
        <button
          onClick={handleToggle}
          className="w-[46px] h-[46px] flex items-center justify-center bg-sky-500 rounded-full"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/2277651fbb37846363b9b2544db190230f4a4032aa581ad2f5d1cffe4dab8ee2?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
            alt={isOpen ? "Close list" : "Open list"}
            className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-45' : ''}`}
          />
        </button>
        <div className="flex flex-col items-end">
          <h3 className="text-xl font-semibold text-[#05172C]">{list.title}</h3>
          <p className="text-sm text-gray-600">{list.description}</p>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-3">
          {listProducts.map((product: Product) => {
            const listProduct = list.products.find(p => p.productId === product.id);
            const quantity = listProduct ? listProduct.quantity : 1;

            return (
              <div key={product.id} className="flex p-3 border rounded-lg">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <div className="flex flex-col items-end">
                      <span className="font-medium">{product.name}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#f00] font-semibold text-sm max-sm:text-xs">
                          ₪{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm max-sm:text-xs">
                            ₪{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    {!isMobile && <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-12 h-12 object-contain max-sm:w-10 max-sm:h-10"
                    />}
                  </div>
                  <div className="flex items-center gap-2">
                    <QtyControls 
                      id={product.id} 
                      quantity={quantity} 
                      size="small"
                      onIncrease={handleIncreaseQuantity}
                      onDecrease={handleDecreaseQuantity}
                    />
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onDelete(list.id)}
              className="text-red-500 hover:text-red-700 px-4 py-2 text-sm"
            >
              מחק רשימה
            </button>
            <button 
              className="bg-[#00BAFF] text-white px-6 py-2 rounded-full hover:bg-[#0096CC]"
            >
              שלח לעגלה
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
