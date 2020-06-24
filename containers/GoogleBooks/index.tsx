import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GoogleBooksComponent } from '~/components/GoogleBooks'

import { GoogleBooksActions, GoogleBooksSelectors } from '~/store'

export const GoogleBooksContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { volumeList } = useSelector(GoogleBooksSelectors.selectGoogleBook)
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

  useEffect(() => {
    return () => {
      dispatch(GoogleBooksActions.reset())
    }
  }, [dispatch])

  return (
    <GoogleBooksComponent
      searchString={searchString}
      onChangeSearchWord={handleInputSearchText}
      onClickSearch={handleOnSearchButton}
      onClickCancel={handleOnSearchStopButton}
      volumeList={volumeList}
    />
  )
}
