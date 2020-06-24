import { VolumeList } from '~/types/apis/googleBooks'
import React from 'react'

export type Props = {
  searchString: string
  onChangeSearchWord: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickSearch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClickCancel: () => void
  volumeList: VolumeList
}
