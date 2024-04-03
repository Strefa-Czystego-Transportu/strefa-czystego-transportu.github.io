import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface RouteState {
    value: string
}

const initialState: RouteState = {
    value: "",
}

export const routeSlice = createSlice({
    name: 'currentRoute',
    initialState,
    reducers: {
        setRoute: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export const { setRoute } = routeSlice.actions

export const selectCount = (state: RootState) => state.route.value

export default routeSlice.reducer