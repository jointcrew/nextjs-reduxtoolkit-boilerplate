import React, { memo } from 'react'

import { Props } from '~/types/components/GoogleBooks/SearchResult'
import { Volume } from '~/types/apis/googleBooks'

const SearchResult: React.FC<Props> = ({ volumeList }: Props) => {
  if (!volumeList.items && volumeList.totalItems === 0) {
    return <div>There is no data.</div>
  }
  return (
    <div>
      {volumeList.items?.map((item: Volume, index: number) => {
        return <div key={index}>{item.volumeInfo.title}test</div>
      })}
    </div>
  )
}

export default memo(SearchResult)
