import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";

export const getReviews = createAsyncThunk(
  "GET_REVIEWS",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl + apiRoute}reviews`);
      const result = response.data;

      console.log(result, "[Get product]");
      return result.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ message: error.response.data });
      }
      return rejectWithValue({ message: "Something went wrong" });
    }
  },
);

export const getReview = createAsyncThunk(
  "GET_REVIEW",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl + apiRoute}products/${id}`);
      const result = response.data;

      console.log(result, "[Get product]");
      return result.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue({ message: error.response.data });
      }
      return rejectWithValue({ message: "Something went wrong" });
    }
  },
);
