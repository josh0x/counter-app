import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Count from '../components/Count'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
