import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import fetcher from '~/libs/fetcher'
import type { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}

export default MyApp
