
export interface ListItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: string[]; // Array of product IDs
}

export interface List {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: string[];
}
