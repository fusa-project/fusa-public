import '@style/index.css'
import '@style/google.css'
import '@style/map.css'
import { AuthProvider } from '@context/auth'

export default function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
