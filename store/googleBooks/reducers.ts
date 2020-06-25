import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '~/types/stores/googleBooks/state'
import { initialState } from './initialState'
import { VolumeList } from '~/types/apis/googleBooks'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
  return produce(state, (draft) => {
    draft['isSearching'] = action.payload.isSearching
  })
}

export const fetchVolumesSuccess: CaseReducer<State, PayloadAction<{ volumeList: VolumeList }>> = (state, action) => {
  return produce(state, (draft) => {
    draft['isSearching'] = false
    draft['volumeList'] = action.payload.volumeList
  })
}

export const fetchVolumesFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
  return produce(state, (draft) => {
    draft['isSearching'] = false
    draft['error'] = action.payload.error
  })
}

export const reset: CaseReducer = () => {
  return initialState
}
