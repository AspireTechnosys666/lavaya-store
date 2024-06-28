import ProductServices from "@services/ProductServices";
import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      products: [],
      popularProducts: [],
      discountedProducts: [],
      stateAddress: "",
      pinCode: "",
      setPopularProducts: (popularProducts) => set({ popularProducts }),
      setDiscountedProducts: (discountedProducts) =>
        set({ discountedProducts }),
      fetchProducts: async ({ pinCode, title, category }) => {
        const data = await ProductServices.getShowingStoreProducts({ pinCode, title, category  });
        set({
          products: data?.products || [],
          popularProducts: data?.popularProducts || [],
          discountedProducts: data?.discountedProducts || [],
        });
      },
      changeAddress: ({ stateAddress, pinCode }) =>
        set({ stateAddress, pinCode }),
      resetAddress: () => set({ stateAddress: "", pinCode: "" }),
      resetProducts: () => set({ popularProducts: [], discountProducts: [] }),
    }),
    {
      name: "store",
      getStorage: () => localStorage,
    }
  )
);
