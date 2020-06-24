import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from './types'
import { initialState } from './initialState'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
  return produce(state, (draft) => {
    draft['isSearching'] = action.payload.isSearching
  })
}

export const fetchVolumesSuccess: CaseReducer<State, PayloadAction<State>> = (state, action) => {
  return produce(state, (draft) => {
    draft['isSearching'] = false
    draft['volumeList'] = action.payload.volumeList
  })
}

export const fetchVolumesFailure: CaseReducer<State, PayloadAction<State>> = (state) => {
  return produce(state, (draft) => {
    draft['isSearching'] = false
  })
}

export const reset: CaseReducer = () => {
  return initialState
}
