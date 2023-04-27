import { create } from "zustand";
import axios from "axios";

const port = 'https://xv-invitation-backend.onrender.com'

const useStore = create((set) => ({
  allGuests: ["sin datos"],
  getGuests: async () => {
    try {
      const response = await axios.get(`${port}/guest/all`);
      set({ allGuests: response.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;