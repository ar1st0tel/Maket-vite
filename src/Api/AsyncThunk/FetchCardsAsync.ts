import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ICardApi {
  id: string;
  name: string;
  price: string;
  img: string;
  description?: string;
  owner?: string;
  ownerPic?: string;
  author?: string;
  authorPic?: string;
  timeOfEnd?: string;
  likes?: number;
}

export type CardsApi = ICardApi[];

export const fetchCardsAsync = createAsyncThunk(
  "CardSlice/fetchCards",
  async (limit: number | undefined) => {
    const url = limit
      ? `http://localhost:3000/items?_limit=${limit}`
      : `http://localhost:3000/items`;
    const response = await axios.get<CardsApi>(url);
    return response.data;
  }
);
