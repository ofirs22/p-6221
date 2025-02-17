export interface UserInfo {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null; 
    token: string | null;
}

export interface ShippingDetails {
  city: string | null;
  street: string | null;
  houseNumber: string | null;
  apartment: string | null;
  postalCode: string | null;
}

export interface BillingDetails {
  city: string | null;
  street: string | null;
  houseNumber: string | null;
  apartment: string | null;
  postalCode: string | null;
}
export interface MainAddress {
  city: string | null;
  street: string | null;
  houseNumber: string | null;
  apartment: string | null;
  postalCode: string | null;
  isEditing: boolean;
}
  
  export interface UserState {
    isAuthenticated: boolean;
    userInfo: UserInfo;
    shippingDetails: ShippingDetails;
    billingDetails: BillingDetails;
    mainAddress: MainAddress;
    totalSaved: number;
  }