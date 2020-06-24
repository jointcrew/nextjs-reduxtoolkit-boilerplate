import { of } from 'rxjs'
import { mergeMap, switchMap, catchError, takeUntil } from 'rxjs/operators'
import { Epic, ofType } from 'redux-observable'
import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { GoogleBooksActions } from '~/store'
import HttpService from '~/services/api/HttpService'
import { VolumeList } from '~/types/apis/googleBooks'

export const fetchGoogleBookEpic: Epic = (action$) =>
  action$.pipe(
    ofType(GoogleBooksActions.fetchVolumes),
    // ↓ 非同期処理が解決する前に、新しいactionが発行された場合、前のactionはキャンセルさせたいので switchMap を使用
    switchMap((action: PayloadAction<{ searchText: string }>) =>
      HttpService.GetAsync<{ q: string }, VolumeList>('volumes', { q: action.payload.searchText }).pipe(
        mergeMap((res) => {
          console.log(res.data)
          return of(
            GoogleBooksActions.fetchVolumesSuccess({
              isSearching: false,
              volumeList: res.data,
            }),
          )
        }),
        catchError((error: AxiosError) => {
          console.error(error.message)
          return of(GoogleBooksActions.fetchVolumesFailure({ isSearching: false }))
        }),
        takeUntil(action$.ofType(GoogleBooksActions.stopFetchVolumes)), // stopFetchVolumes actionが発火したタイミングで Observable を強制終了
      ),
    ),
  )

export default [fetchGoogleBookEpic]
