import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '~/types/stores/root'
import { State as GoogleBooksState } from '~/types/stores/googleBooks/state'

export const googleBooksState = (state: RootState): GoogleBooksState => state.googleBook

export const getTotalItems = createSelector<RootState, GoogleBooksState, number>(
  googleBooksState,
  (googleBooksState: GoogleBooksState) => {
    return googleBooksState.volumeList.totalItems
  },
)

export const getVolumeList = createSelector<RootState, GoogleBooksState, GoogleBooksState['volumeList']>(
  googleBooksState,
  (googleBooksState: GoogleBooksState) => {
    return googleBooksState.volumeList
  },
)
