import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourierDetails } from '../../../store/courierSlice';
import InfoCard from './InfoCard';
import { CourierDetailsProps } from '../../../types/courierTypes';

const CourierDetails: React.FC = () => {
  const courierDetails:CourierDetailsProps = useSelector(selectCourierDetails);
    console.log(courierDetails)
  return (
    <div className="flex flex-wrap gap-8 items-start">
      <InfoCard
        title="פרטי השליח"
        data={courierDetails.courier}
        iconSrc="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/bed8a027d8161b1747334519abb9466d5f01a847012d720f37909f4609576a1f?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
        fields={[
          { key: 'name', label: 'שם' },
          { key: 'phone', label: 'מס\' טלפון' },
        ]}
        orderNumber={courierDetails.shipment.orderNumber}
      />
      <InfoCard
        title="פרטי משלוח"
        data={courierDetails.shipment}
        iconSrc="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/cbf0016c517a666b2d1c46680460a2bef94998f3c450de8d620fa1c19c5abf74?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
        fields={[
          { key: 'name', label: 'שם' },
          { key: 'address', label: 'כתובת ודירה' },
        ]}
        orderNumber={courierDetails.shipment.orderNumber}
      />
    </div>
  );
};

export default CourierDetails;