import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../actions/reviews";

const initialState = {
  reviews: [],
  listing: [],
};

const ProductSlice = createSlice({
  initialState,
  name: "reviews",

  extraReducers: (builder) => {
    builder

      .addCase(getReviews.fulfilled, (state, action) => {
        const reviews = action.payload;
        console.log(reviews);
        const reviewsByListing = reviews.reduce((acc, review) => {
          const id = review.listingId;
          if (!acc[id]) acc[id] = [];
          acc[id].push(review);
          return acc;
        }, {});

        const properties = Object.values(
          reviews.reduce((acc, review) => {
            const id = review.listingId;
            if (!acc[id]) {
              acc[id] = {
                listingId: id,
                listingName: review.listingName,
                reviews: [],
                status: review.status,
                propertyDetails: review.propertyDetails,
                image_urls: review.image_urls,
                amenities: review.amenities,
                policies: review.policies,
                cancellationPolicy: review.cancellationPolicy,
              };
            }
            acc[id].reviews.push(review); // push normalized review
            return acc;
          }, {}),
        );

        console.log(properties);
        return {
          ...state,
          reviews: action.payload,
          listing: properties,
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
  reducers: {
    togglePublicReview: (state, action) => {
      const reviewId = action.payload;

      console.log(reviewId);

      const updatedReviews = state.reviews.map((r) =>
        r.id == reviewId
          ? { ...r, status: r.status === "published" ? "private" : "published" }
          : r,
      );

      const updatedListing = state.listing.map((property) => ({
        ...property,
        reviews: property.reviews.map((r) =>
          r.id == reviewId
            ? {
                ...r,
                status: r.status === "published" ? "private" : "published",
              }
            : r,
        ),
      }));

      console.log(updatedListing);

      return {
        ...state,
        reviews: updatedReviews,
        listing: updatedListing,
      };
    },
  },
});

export const { togglePublicReview } = ProductSlice.actions;
export default ProductSlice.reducer;
