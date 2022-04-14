import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AdminProvider } from 'src/context/admin-context'
import { SWRConfig } from 'swr'
import fetcher from '~/libs/fetcher'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      {/* <AdminProvider> */}
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      {/* </AdminProvider> */}
    </SWRConfig>
  )
}

export default MyApp
