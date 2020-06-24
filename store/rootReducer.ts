import { combineReducers } from '@reduxjs/toolkit'
import { googleBookSlice } from '~/store/googleBooks/slice'

const rootReducer = combineReducers({
  googleBook: googleBookSlice.reducer,
})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

// export const rootSelector = (state: RootState): RootState => state
