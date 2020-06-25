import { HYDRATE } from 'next-redux-wrapper'
import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { GoogleBooksActions } from '~/store'
import HttpService from '~/services/api/HttpService'
import { VolumeList } from '~/types/apis/googleBooks'

// TODO: do something
// @see https://github.com/kirill-konshin/next-redux-wrapper#usage
export const initEpic: Epic = (action$) =>
  action$.pipe(
    ofType(HYDRATE),
    switchMap(() => {
      return of(GoogleBooksActions.reset())
    }),
  )

export const fetchGoogleBookEpic: Epic = (action$) =>
  action$.pipe(
    ofType(GoogleBooksActions.fetchVolumes),
    switchMap((action: PayloadAction<{ searchText: string }>) =>
      HttpService.GetAsync<{ q: string }, VolumeList>('volumes', { q: action.payload.searchText }).pipe(
        mergeMap((res) => {
          return of(GoogleBooksActions.fetchVolumesSuccess({ volumeList: res.data }))
        }),
        catchError((error: AxiosError) => {
          return of(GoogleBooksActions.fetchVolumesFailure({ error: error.message }))
        }),
        takeUntil(action$.ofType(GoogleBooksActions.stopFetchVolumes)),
      ),
    ),
  )

export default [initEpic, fetchGoogleBookEpic]
