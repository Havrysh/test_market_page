import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, ServerResponse } from "../types/product";

export const productsApi = createApi({
  reducerPath: "products/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], string>({
      query: (products: string) => ({
        url: "/products",
        params: {
          q: products,
        },
      }),
    }),
    getElectronics: build.query<IProduct[], string>({
      query: (electronics: string) => ({
        url: "/category/electronics",
        params: {
          q: electronics,
          per_page: 8,
        },
      }),
    }),
    getJewelery: build.query<IProduct[], string>({
      query: (jewelery: string) => ({
        url: "/category/jewelery",
        params: {
          q: jewelery,
          per_page: 8,
        },
      }),
    }),
    getMensClothing: build.query<IProduct[], string>({
      query: (menClothing: string) => ({
        url: `/category/men's%20clothing`,
        params: {
          q: menClothing,
          per_page: 8,
        },
      }),
    }),
    getWomensClothing: build.query<IProduct[], string>({
      query: (WomensClothing: string) => ({
        url: `/category/women's%20clothing`,
        params: {
          q: WomensClothing,
          per_page: 8,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useLazyGetJeweleryQuery,
  useLazyGetMensClothingQuery,
  useLazyGetWomensClothingQuery,
  useLazyGetElectronicsQuery,
} = productsApi;
