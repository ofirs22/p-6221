import React, { useState } from 'react';
import { OrderCard } from './OrderCard';
import { OrderItem } from './OrderItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const PreviousOrdersPage: React.FC = () => {
  const orders = useSelector((state: RootState) => state.order);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="w-full">
        <div className="flex flex-col w-full">
          <div className="w-full text-2xl font-semibold leading-none text-right text-black mb-6">
            <div className="flex flex-col items-end mr-auto">
              <div className="text-right">הזמנות קודמות</div>
              <div className="mt-3 w-36 bg-sky-500 h-[3px]" />
            </div>
          </div>
          <div className="flex flex-col mt-4 w-full">
            <div className="w-full h-px bg-neutral-300" />
            {orders.orders.map((order) => (
              <OrderCard 
                key={order.id} 
                order={order}
                isExpanded={expandedOrderId === order.id}
                onToggle={() => setExpandedOrderId(expandedOrderId === order.id ? null : order.id)}
              />
            ))}
            <div className="mt-5 w-full bg-sky-500 h-[3px]" />
            <div className="mt-5 w-full h-px bg-neutral-300" />
            <div className="flex justify-between items-center mt-5 w-full max-sm:flex-col max-sm:gap-4 max-sm:items-end">
              <button className="text-sm leading-loose cursor-pointer" onClick={() => {/* Download invoice logic */}}>
                הורד חשבונית
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};