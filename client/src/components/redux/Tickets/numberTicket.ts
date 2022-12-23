import { createSlice } from "@reduxjs/toolkit";

export const numberTicket = createSlice({
  name: "numberTicket",
  initialState: {
    id: localStorage.getItem("ticket")
      ? JSON.parse(localStorage.getItem("ticket") || "{}")
      : [],
  },

  reducers: {
    addBuyTicket: (state: any, action) => {
      const indexIndex = state.id.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (indexIndex >= 0) {
        state.id[indexIndex].ticket += 1;
      } else {
        const tempTicket = { ...action.payload, ticket: 1 };
        state.id.push(tempTicket);
      }
      localStorage.setItem("ticket", JSON.stringify(state.id));
    },
  },
});
