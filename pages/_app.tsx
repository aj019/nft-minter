import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import WalletContextProvider from '../components/WalletContextProvider'

import { extendTheme } from "@chakra-ui/react"
require('@solana/wallet-adapter-react-ui/styles.css')

const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <WalletContextProvider>
		<Component {...pageProps} />
	</WalletContextProvider>
    </ChakraProvider>
}
