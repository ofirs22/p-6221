import React from 'react';
import { useSelector } from 'react-redux';
import { selectOrderStatus } from '../../../store/orderSlice';
import { OrderStatusButton } from './OrderStatusButton';

export const OrderStatus: React.FC = () => {
  const orderStatus = useSelector(selectOrderStatus);

  const statuses = [
    {status: "הזמנה הושלמה", complete: false},
    {status:"השליח בדרך", complete: false},
    {status: "הזמנה מוכנה", complete: true},
    {status: "הזמנה אושרה", complete: true}
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="flex gap-14 justify-between items-center p-5 mx-auto my-0 max-w-[984px] max-md:flex-wrap max-md:gap-10 max-md:justify-center max-md:p-4 max-sm:gap-5 max-sm:p-2.5">
        {statuses.map((status, index) => (
          <OrderStatusButton
            key={index}
            status={status.status}
            isActive={orderStatus === status.status}
            complete={status.complete}
          />
        ))}
      </div>
    </>
  );
};

