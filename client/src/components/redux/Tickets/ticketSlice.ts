import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicket.pending, (state: any, actions: any) => {
        state.status = "loading";
      })
      .addCase(fetchTicket.fulfilled, (state: any, actions: any) => {
        return {
          status: "idle",
          ...state,
          data: actions.payload,
        };
      });
  },
});
export const fetchTicket = createAsyncThunk("data/ticket", async () => {
  const res = await fetch("http://localhost:5555/getData");
  const data = await res.json();
  return data;
});
