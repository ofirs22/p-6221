import React from "react";
import { OrderItem } from "./OrderItem";
import { Order } from "../../../types/orderTypes";

interface OrderCardProps {
  order: Order;
  isExpanded: boolean;
  onToggle: () => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, isExpanded, onToggle }) => {
  return (
    <div
      className={`flex flex-col w-full px-6 py-4 mb-4 bg-white rounded-xl shadow-[0px_2px_12px_rgba(183,189,196,0.504)] hover:shadow-lg transition-all cursor-pointer ${
        isExpanded ? "shadow-lg" : ""
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-end w-full">
        <div className="flex flex-col items-end">
          <div className="text-xl font-semibold text-gray-900 text-right">
            קניה מס' {order.id}
          </div>
          <div className="mt-1 text-sm text-gray-500 text-right">
            בוצע בתאריך: {order.date}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 border-t pt-4 space-between">
          {order.products.map((product, index) => (
            <div>
              <OrderItem
                key={`${order.id}-${product.productId}-${index}`}
                productId={product.productId}
                quantity={product.quantity}
              />

            </div>
          ))}
                        <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <button
                  className="text-sm text-sky-500 hover:text-sky-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    /* Download invoice logic */
                  }}
                >
                  הורד חשבונית
                </button>
                <div className="text-xl font-semibold">
                  סה"כ: ₪{order.total.toFixed(2)}
                </div>
              </div>
        </div>
      )}
    </div>
  );
};
