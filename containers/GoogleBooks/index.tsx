import React from 'react'
import { useSelector } from 'react-redux'

import GoogleBooksComponent from '~/components/GoogleBooks'

import { GoogleBooksSelectors } from '~/store'
import { useGoogleBooksHandler, useCleanupGoogleBooks } from '~/hooks/GoogleBooks'

export const GoogleBooksContainer: React.FC = () => {
  const volumeList = useSelector(GoogleBooksSelectors.getVolumeList)
  const {
    searchString,
    handleInputSearchText,
    handleOnSearchButton,
    handleOnSearchStopButton,
  } = useGoogleBooksHandler()
  useCleanupGoogleBooks()

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
