import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressIndicator } from '../questionaire/ProgressIndicator';
import { Card } from '../../ui/card';
import { RootState } from '../../../store';
import { selectCartTotal } from '../../../store/cartSlice';
import { DeliveryNTotal } from '../checkout/DeliveryNTotal';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../../store/orderSlice';
import { clearCart } from '../../../store/cartSlice';
import { Order, OrderStatus } from '../../../types/orderTypes';
import { setSavingsAmount } from '../../../store/userSlice';
import { selectUserDetails } from '../../../store/userSlice';

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUserDetails);
  console.log(user)
  const cart = useSelector((state: RootState) => state.cart);
  const totalAmount = useSelector(selectCartTotal);

  const onFinish = () => {
    // Create new order
    const newOrder: Order = {
      id: `ORD-${Date.now()}`, // Generate unique ID
      date: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
      products: cart.items.map(item => ({
        productId: item.id,
        quantity: item.quantity
      })),
      total: totalAmount.totalPrice,
      status: 'הזמנה נוצרה' as OrderStatus
    };

    // Dispatch actions
    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    dispatch(setSavingsAmount(cart.totalSaving));

    // Navigate to tracking
    navigate('/checkout/tracking');
  }
  
  const onTrackOrder = () => {
    navigate('/checkout/tracking');
  }

  return (
    <div className="flex flex-col w-full max-w-[1124px] mx-auto gap-[30px]">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <ProgressIndicator currentStep={3} totalSteps={3} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[30px] text-right">
        {/* Success Message */}
        <Card className="p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[11px]">
              <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                תודה על ההזמנה שלך!
              </h2>
              <div className="h-[3px] w-[214px] bg-[#00BAFF] ml-auto" />
            </div>
            <div className="h-[1px] w-full bg-[#D2D2D2]" />

            {/* Savings Banner */}
            <div className="p-5 bg-[#FC4B4E] rounded-lg shadow-md">
              <div className="flex items-start justify-between px-5">
                <div className="flex items-baseline gap-6 w-full">
                  <h2 className="text-[68px] leading-[70px] font-semibold text-white text-center w-full" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                    היום חסכת ₪{cart.totalSaving.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Order Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {/* Receipt Information */}
          <Card className="p-6">
            <div className="flex flex-col">
              <div className="flex flex-col items-center gap-[11px] mb-4">
                <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                  מידע וקבלה
                </h2>
                <div className="h-[3px] w-[114px] bg-[#00BAFF] mx-auto" />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 ">
                {/* Shipping Address Section */}
                <div className="mb-6 flex flex-col items-center">
                  <h3 className="text-center font-semibold mb-2">:כתובת למשלוח</h3>
                  <div className="text-gray-600 text-center space-y-1">
                    <p>{`${user.shippingDetails.street} `}</p>
                    <p>{`${user.shippingDetails.houseNumber} דירה מס׳ `}</p>
                    <p>{`מיקוד ${user.shippingDetails.postalCode}`}</p>
                  </div>
                </div>
                <hr />
                  {/* Personal Details Section */}
                <div className="mb-6 flex flex-col items-center mt-5">
                  <h3 className="text-center font-semibold mb-2">:פרטים אישיים</h3>
                  <div className="text-gray-600 text-center space-y-1">
                    <p>{`${user.userInfo.firstName} ${user.userInfo.lastName}`}</p>
                    <p dir="ltr" className="text-center">{user.userInfo.phone}</p>
                    <p dir="ltr" className="text-center">{user.userInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={onTrackOrder}
                  className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  עקוב אחרי הזמנה
                </button>
                <button
                  onClick={onFinish}
                  className="w-full h-[52px] border-2 border-[#05172C] text-[#05172C] rounded-full font-semibold text-[20px] leading-[29px]"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  שלח לי קבלה
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
