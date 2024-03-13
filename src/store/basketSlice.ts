import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBasketState, IBasketProduct } from "./types";

export const fetchProducts = createAsyncThunk<IBasketProduct[], undefined, { rejectValue: string }>(
  'basket/fetchProducts',
  async function (_, { rejectWithValue }) {
    const response = await fetch('https://dummyjson.com/carts/1');
    if (!response.ok) {
      return rejectWithValue('Server Error');
    }

    const data = await response.json();

    return data.products
  }
)

const initialState: IBasketState = {
  products: [],
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    countPlus(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    countMinus(state, action: PayloadAction<number>) {
      const product = state.products.find(p => p.id === action.payload);
      if (product) {
        product.quantity -= 1;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
      })
      // .addCase(fetchProducts.rejected, (state, action) => {
      //   state.loading = true;
      //   state.error = null;
      // })
  }
})

export const { countPlus, countMinus, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;