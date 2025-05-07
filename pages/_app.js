import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import ThemeProvider from "../theme/theme-provider";


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
