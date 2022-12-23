import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "../redux/Tickets/ticketSlice";
import { numberTicket } from "./Tickets/numberTicket";

const store = configureStore({
  reducer: {
    listTicket: ticketSlice.reducer,
    numberTicket: numberTicket.reducer,
  },
});

export default store;
