import React from 'react'
import Link from 'next/link'

import { SearchResult } from './SearchResult'
import { Props } from '~/types/components/GoogleBooks'

export const GoogleBooksComponent: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1>GoogleBooks Page</h1>
      <input placeholder="検索ワードを入力" onChange={props.onChangeSearchWord} />
      <button onClick={props.onClickSearch} disabled={!props.searchString}>
        検索
      </button>
      <button onClick={props.onClickCancel}>検索中止！</button>
      <SearchResult volumeList={props.volumeList} />
      <div>
        <Link href="/">
          <a>{'Get back to "/"'}</a>
        </Link>
      </div>
    </div>
  )
}
