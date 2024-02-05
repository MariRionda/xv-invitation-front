import { create } from "zustand";
import axios from "axios";
import { collectionName } from "../src/utils/constants";

const port = process.env.NEXT_PUBLIC_PORT;


const useStore = create((set) => ({
  
  allGuests: ["sin datos"],
  getGuests: async () => {
    try {
      const response = await axios.get(`${port}/guest/all`, {
        headers: {
          'collection': collectionName,
        },
      });
      set({ allGuests: response.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;