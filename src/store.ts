import { configureStore } from '@reduxjs/toolkit'
import routeReducer from './stores/currentRoute'

export const store = configureStore({
    reducer: {
        route: routeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch