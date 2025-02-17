export interface CourierInfo {
    name: string;
    phone: string;
  }
  
  export interface ShipmentInfo {
    orderNumber: string;
    name: string;
    address: string;
  }
  
  export interface CourierDetailsProps {
    courier: CourierInfo;
    shipment: ShipmentInfo;
  }