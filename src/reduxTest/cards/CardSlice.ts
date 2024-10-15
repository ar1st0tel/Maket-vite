import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCardsAsync} from "../../client/products/asyncThunk/AsyncThunk.ts";

export interface CardSlice {
    id: string,
    name: string,
    price: string,
    img: string,
}

type initialStateType = {
    cards: CardSlice[]
}

const initialState: initialStateType = {
    cards: []
}


export const CardSlice = createSlice({
    name: "Card",
    initialState,
    reducers: {
        fetchCards: (state: initialStateType, action: PayloadAction<CardSlice[], string>) => {
            state.cards = action.payload
        },
        addCard: (state: initialStateType, action: PayloadAction<CardSlice, string>) => {
            state.cards = [
                ...state.cards,
                action.payload
            ]
        },
       /*setCards: (state: initialStateType, action: {type: string, payload:CardSlice[]}) => {
            state.cards = [
                ...state.cards,
                ...action.payload
            ]
        },*/
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCardsAsync.pending,(state:initialStateType, action: PayloadAction<CardSlice, string>) => {
                state.cards = action.payload
        })
    }
})


// Typescript generics!
//  type Generic<T> = {someField: T, anotherField: any}
// разберись что такое PayloadAction

// type PayloadAction<P = void, T = string> = {
//     payload: P;
//     type: T;
// }

// типизируй свой Action в addCase


export const {addCard,fetchCards,setCards} = CardSlice.actions;
export const {reducer: CardReducer} = CardSlice

// Типизация стора
// Апишка + типизация апишки
// Компонент + типизация => рендер компонента

// 1 метод =  асинхронный  запрос н а сервер (загрузка ВСЕХ карточек) fetchCard
// 2 метод = синхронно добавление 1 карточки addCart
// 3 метод = получил данные из 1 метода => синхронно запихнул их в стейт setCards