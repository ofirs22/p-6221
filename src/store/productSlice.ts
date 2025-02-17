import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductState } from '../types/productTypes';
import { mockProducts } from '../data/mockProducts';
import { mockCategories } from '../data/mockCategories';

const initialState: ProductState = {
  products: mockProducts,
  loading: false,
  error: null,
  hotProducts: [],
  productCategory: [],
  onSaleProducts: [],
};

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('/api/products'); // Adjust the API endpoint as needed
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
});

// Async thunk to fetch 4 random hot products
export const fetchHotProducts = createAsyncThunk('products/fetchHot', async (_, { getState }) => {
    const state = getState() as { products: ProductState };
    const hotProducts = state.products.products.filter((product) => product.isHot);
  
    // Shuffle and pick 4 random hot products
    const shuffled = hotProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
    return shuffled;
});

// Async thunk to fetch 4 random hot products
export const fetchSaleProducts = createAsyncThunk('products/fetchOnSale', async (_, { getState }) => {
    const state = getState() as { products: ProductState };
    const onSaleProducts = state.products.products.filter((product) => product.isSale);
  
    // Shuffle and pick 4 random hot products
    const shuffled = onSaleProducts.sort(() => 0.5 - Math.random()).slice(0, 6);
    return shuffled;
});

// Async thunk to fetch 4 random hot products
export const fetchProductsByCategory = createAsyncThunk('products/fetchByCategory', async (_, { getState }) => {
    const catName: string[] = [];
    mockCategories.map((category) => catName.push(category.name));
    const state = getState() as { products: ProductState };
    const randomCategories = catName.sort(() => 0.5 - Math.random()).slice(0, 3);
    const filteredProducts = randomCategories.map((category) => {
      const productsInCategory = state.products.products.filter((product) =>{
        return product.categories.includes(category)
    });
      const shuffled = productsInCategory.sort(() => 0.5 - Math.random()).slice(0, 4);
      return {
        product: shuffled,
        category: category,
    };
    });
    return filteredProducts;
  });
  

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(fetchHotProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHotProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.hotProducts = action.payload;
      })
      .addCase(fetchHotProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch hot products';
      })
      .addCase(fetchSaleProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSaleProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.onSaleProducts = action.payload;
      })
      .addCase(fetchSaleProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch on sale products';
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.productCategory = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products by category';
      });
  },
});

export const selectProducts = (state: { products: ProductState }) => state.products.products;
export const selectHotProducts = (state: { products: ProductState }) => state.products.hotProducts;
export const selectSaleProducts = (state: { products: ProductState }) => state.products.onSaleProducts;
export const selectProductsCategories = (state: { products: ProductState }) => state.products.productCategory;
export const selectLoading = (state: { products: ProductState }) => state.products.loading;
export const selectError = (state: { products: ProductState }) => state.products.error;

export default productSlice.reducer; 