import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface ICardApi {
    id: string,
    name: string,
    price: string,
    img: string,
}

export type CardsApi = ICardApi[]

type fetchCardsAsync = {
    getProduct(): Promise<CardsApi>;
}

export const fetchCardsAsync =  createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const response = await axios.get<CardsApi>(`http://localhost:3000/items`)
        return response.data;
    }
)