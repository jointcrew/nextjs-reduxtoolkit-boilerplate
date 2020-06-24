import { createAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import * as reducers from './reducers'
import * as types from '~/types/stores/googleBooks/actions'

export const googleBookSlice = createSlice({
  name: 'googleBook',
  initialState: initialState,
  reducers: {
    fetchVolumesSuccess: reducers.fetchVolumesSuccess,
    fetchVolumesFailure: reducers.fetchVolumesFailure,
    setIsSearching: reducers.setIsSearching,
    reset: reducers.reset,
  },
})

const fetchVolumes = createAction<{ searchText: string }>(types.FETCH_VOLUMES)
const stopFetchVolumes = createAction(types.STOP_FETCH_VOLUMES)

export const createActions = { fetchVolumes, stopFetchVolumes }
