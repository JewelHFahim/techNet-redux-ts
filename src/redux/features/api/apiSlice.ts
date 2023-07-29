import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getproducts: builder.query({
      query: () => `/products`,
    }),

    getSingleproduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetproductsQuery, useGetSingleproductQuery } = apiSlice;

export default apiSlice;
