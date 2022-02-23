export type AllProductsType = {
  products: ProductType[];
};

export type ProductType = {
  status?: number;
  message?: string;
  id?: 1;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
};

export type ProductIdType = number;
