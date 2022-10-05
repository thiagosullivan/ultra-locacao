// import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp