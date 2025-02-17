import React from 'react';
import { useSelector } from 'react-redux';
import { ProgressIndicator } from '../questionaire/ProgressIndicator';
import { Card } from '../../ui/card';
import { RootState } from '../../../store';
import { selectCartTotal } from '../../../store/cartSlice';
import { DeliveryNTotal } from '../checkout/DeliveryNTotal';
import { useNavigate } from 'react-router-dom';





const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    console.log("Finish button clicked");
  }
  
  const onTrackOrder = () => {
    console.log("Track Order button clicked");
    navigate('/checkout/tracking');
  }
  const user = useSelector((state: RootState) => state.user);
  const cart = useSelector((state: RootState) => state.cart);
  const totalAmount = useSelector(selectCartTotal);

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
          <Card className="p-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-[11px]">
                <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                  מידע וקבלה
                </h2>
                <div className="h-[3px] w-[114px] bg-[#00BAFF] ml-auto" />
              </div>
              <div className="h-[1px] w-full bg-[#D2D2D2]" />

              <div className="p-5 bg-white shadow-md rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      שם פרטי:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.userInfo.firstName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      שם משפחה:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.userInfo.lastName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      מספר טלפון:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.userInfo.phone}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      עיר:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.shippingDetails.city}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      רחוב ומספר:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.shippingDetails.street}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      מספר בית/דירה:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.shippingDetails.houseNumber}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      קומה:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.shippingDetails.apartment}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      מיקוד:
                    </h3>
                    <p className="text-[14px] leading-[20.57px] text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                      {user.shippingDetails.postalCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="p-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[11px]">
              <h2 className="text-[24px] leading-[27px] font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
                מידע וקבלה
              </h2>
              <div className="h-[3px] w-[114px] bg-[#00BAFF] ml-auto" />
            </div>
            <div className="h-[1px] w-full bg-[#D2D2D2]" />
            {/* Render Cart Items */}
            <div className="flex flex-col gap-4">
              {cart.items.map((item) => (
                <div key={item.id} className="bg-white shadow-[0px_2px_12px_rgba(183,189,196,0.504)] flex w-full items-center gap-5 justify-between mt-[7px] px-4 py-4 rounded-xl max-md:max-w-full max-md:flex-wrap">
                  <div className="flex items-center">
                    <button className="w-[52px] h-[52px] bg-white rounded-full shadow-lg">{item.quantity}</button>
                  </div>
                  <div className="flex items-center ml-auto">
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <div className="text-gray-500">
                        {item.originalPrice && <span className="line-through">${item.originalPrice.toFixed(2)}</span>}
                        <span className="ml-2 text-red-500">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded ml-4" />
                  </div>
                </div>
              ))}
              <DeliveryNTotal totalPrice={totalAmount.totalPrice} />
            </div>
          </div>
        </Card>
        </div>

        {/* Finish and Track Order Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onFinish}
            className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            סיום
          </button>
          <button
            onClick={onTrackOrder}
            className="w-full h-[52px] bg-[#00BAFF] text-white rounded-full font-semibold text-[20px] leading-[29px]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            מעקב הזמנה
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
