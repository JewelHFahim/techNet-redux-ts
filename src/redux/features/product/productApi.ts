import apiSlice from '../api/apiSlice';

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getproducts: builder.query({
      query: () => `/products`,
    }),

    getSingleproduct: builder.query({
      query: (id) => `/product/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),

    getComments: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
    
  }),
});

export const {
  useGetproductsQuery,
  useGetSingleproductQuery,
  usePostCommentMutation,
  useGetCommentsQuery,
} = productApi;

export default productApi;
