import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const initialState = { cart: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increaseQuantity(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      state.cart[existingItemIndex].quantity++;
      state.total = state.total + state.cart[existingItemIndex].price;
    },

    decreaseQuantity(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (+state.cart[existingItemIndex].quantity === 1) {
        const price = state.cart[existingItemIndex].price;
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        state.total = state.total - price;
        return;
      }
      state.cart[existingItemIndex].quantity--;
      state.total = state.total - state.cart[existingItemIndex].price;
    },

    addToBasket(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex > -1) {
        state.cart[existingItemIndex].quantity =
          +state.cart[existingItemIndex].quantity + +action.payload.quantity;
        state.total =
          state.total + +action.payload.price * +action.payload.quantity;
      } else {
        state.cart.push(action.payload);
        state.total =
          state.total + +action.payload.price * +action.payload.quantity;
      }
    },

    removeFromBasket(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.total =
        state.total - +action.payload.price * +action.payload.quantity;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;
export default store;
