import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { MainLayout } from 'layouts/MainLayout'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}

// Default export is a requirement for nextjs to know this is the export for the page.
export default MyApp
