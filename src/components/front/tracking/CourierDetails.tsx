
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourierDetails } from '../../../store/courierSlice';
import { Card } from '../../ui/card';
import { Pencil, Phone } from 'lucide-react';

const CourierDetails: React.FC = () => {
  const courierDetails = useSelector(selectCourierDetails);

  const renderDetailCard = (
    title: string, 
    fields: { label: string; value: string }[], 
    orderNumber?: string,
    icon?: React.ReactNode
  ) => (
    <Card className="flex-1 p-6 bg-white rounded-xl">
      {/* Header with order number if provided */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold text-right text-[#05172C]">
          {title}
        </div>
        {orderNumber && (
          <div className="flex items-center gap-2 text-[#778080]">
            <span className="text-sm">{orderNumber}</span>
            <span className="text-sm">:מס׳ הזמנה</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-[#D2D2D2] mb-4" />

      {/* Content */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Fields */}
        <div className="flex-grow space-y-3">
          {fields.map((field, index) => (
            <div key={index} className="flex justify-end items-center gap-4">
              <div className="flex items-center gap-4 w-full">
                <span className="text-[#05172C] flex-grow text-right">
                  {field.value}
                </span>
                <div className="w-px h-4 bg-[#D2D2D2]" />
                <span className="text-[#05172C] font-semibold w-24 text-right">
                  {field.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Shipping Details Card */}
      {renderDetailCard(
        "פרטי משלוח",
        [
          { label: "שם", value: courierDetails.shipment.name },
          { label: "כתובת ודירה", value: courierDetails.shipment.address }
        ],
        courierDetails.shipment.orderNumber,
        <Pencil className="w-5 h-5 text-[#05172C]" />
      )}

      {/* Courier Details Card */}
      {renderDetailCard(
        "פרטי השליח",
        [
          { label: "שם", value: courierDetails.courier.name },
          { label: "מס׳ טלפון", value: courierDetails.courier.phone }
        ],
        undefined,
        <Phone className="w-5 h-5 text-[#05172C]" />
      )}
    </div>
  );
};

export default CourierDetails;
