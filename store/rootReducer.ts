import { combineReducers } from '@reduxjs/toolkit'
import { googleBookSlice } from '~/store/googleBooks/slice'
import { RootState } from '~/types/stores/root'

const rootReducer = combineReducers({
  googleBook: googleBookSlice.reducer,
})

export default rootReducer
export const rootSelector = (state: RootState): RootState => state
