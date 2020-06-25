// import React, { FC } from 'react'
import React from 'react'
import App, { AppContext } from 'next/app'

import { wrapper } from '~/store/rootStore'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)
// const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />
