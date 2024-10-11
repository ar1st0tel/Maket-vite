import {configureStore} from '@reduxjs/toolkit'
import CardReducer from '../cards/CardSlice.ts'
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        cardReducer: CardReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()