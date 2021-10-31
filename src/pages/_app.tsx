import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import GlobalContext from '../context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContext>
  )
}

export default MyApp