import { createSlice, configureStore } from "@reduxjs/toolkit";
import history from "../history";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [
      {
        id: "",
        userprofile: {},
        isSigned: false,
        cart: [],
        total: 0,
        shippingInformation: {},
      },
    ],
  },
  reducers: {
    isSignedIn: (state, { payload }) => {
      state.user.push({
        id: payload.googleId,
        userprofile: payload,
        isSigned: true,
        cart: [],
        total: 0,
        shippingInformation: {},
      });
      history.push(`/${payload.googleId}`);
    },

    isSignedOut: (state, { payload }) => {
      state.user = state.user.filter(el => {
        history.push("/");
        return el.id !== payload;
      });
    },

    addTocart: (state, { payload }) => {
      console.log(payload);
      state.user[payload.indexx].cart.push(payload.el);
    },
    addQuantity: (state, { payload }) => {
      state.user[payload.indexx].cart[payload.index].quantity += 1;
    },
    reduceQuantity: (state, { payload }) => {
      state.user[payload.indexx].cart[payload.index].quantity -= 1;
    },
    deleteItem: (state, { payload }) => {
      console.log(payload);
      state.user[payload.indexx].cart = state.user[payload.indexx].cart.filter(
        (item, index) => index !== payload.index
      );
      if (state.user[payload.indexx].cart.length < 1) {
        history.push("/");
      }
    },
    totalReAc: (state, { payload }) => {
      state.user[payload.indexx].total = payload.tot;
    },
    addShippingInfo: (state, { payload }) => {
      state.user[payload.indexx].shippingInformation = payload.shippingInfo;
      state.user[payload.indexx].cart = [];
      state.user[payload.indexx].total = 0;

      history.push("/");
    },
  },
});
export const store = configureStore({
  reducer: userSlice.reducer,
});
export const {
  actions: {
    isSignedIn,
    isSignedOut,
    addTocart,
    addQuantity,
    reduceQuantity,
    deleteItem,
    totalReAc,
    setID,
    addShippingInfo,
  },
} = userSlice;
