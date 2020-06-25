import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GoogleBooksActions } from '~/store'

export const useGoogleBooksHandler = () => {
  const dispatch = useDispatch()
  const [searchString, changeSearchString] = useState('')

  const handleInputSearchText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      changeSearchString(event.target.value)
    },
    [changeSearchString],
  )

  const handleOnSearchButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      dispatch(GoogleBooksActions.fetchVolumes({ searchText: searchString }))
    },
    [dispatch, searchString],
  )

  const handleOnSearchStopButton = useCallback(() => {
    dispatch(GoogleBooksActions.stopFetchVolumes())
  }, [dispatch])

  return { searchString, handleInputSearchText, handleOnSearchButton, handleOnSearchStopButton }
}

export const useCleanupGoogleBooks = (): void => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch(GoogleBooksActions.reset())
    }
  }, [dispatch])
}
