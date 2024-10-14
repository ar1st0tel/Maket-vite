import {createSlice} from "@reduxjs/toolkit";

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
        fetchCards: (state: initialStateType, action: {type: string, payload:CardSlice[]}) => {
            state.cards = action.payload
        },
        addCard: (state: initialStateType, action: {type: string, payload: CardSlice}) => {
            state.cards = [
                ...state.cards,
                action.payload
            ]
        },
        setCards: (state, action) => {
            state.cards = [
                ...state.cards,
                ...action.payload
            ]
        }
    }
})

export const {addCard,fetchCards,setCards} = CardSlice.actions;
export const {reducer: CardReducer} = CardSlice

// Типизация стора
// Апишка + типизация апишки
// Компонент + типизация => рендер компонента

// 1 метод =  асинхронный  запрос н а сервер (загрузка ВСЕХ карточек) fetchCard
// 2 метод = синхронно добавление 1 карточки addCart
// 3 метод = получил данные из 1 метода => синхронно запихнул их в стейт setCards