import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from "react-redux";
import {CardReducer} from "../cards/CardSlice.ts";

export const store = configureStore({
    reducer: {
        cardReducer: CardReducer

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()