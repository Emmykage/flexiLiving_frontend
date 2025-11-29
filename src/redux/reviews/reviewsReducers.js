import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../actions/reviews";

const initialState = {
  reviews: [],
};

const ProductSlice = createSlice({
  initialState,
  name: "reviews",

  extraReducers: (builder) => {
    builder

      .addCase(getReviews.fulfilled, (state, action) => {
        return {
          ...state,
          reviews: action.payload,
          loading: false,
        };
      })
      .addCase(getReviews.rejected, (state, action) => {
        return {
          ...state,
          message: action.payload.message,
          loading: false,
        };
      })
      .addCase(getReviews.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      });
  },
});

export default ProductSlice.reducer;
