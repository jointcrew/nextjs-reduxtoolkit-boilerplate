import React from 'react'
import { AppProps } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '~/store/rootStore'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default withRedux(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})(WrappedApp)
