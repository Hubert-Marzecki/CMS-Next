import App from 'next/app'
import Header from '../components/Header';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme'
import GlobalStyles from '../styles/GlobalStyles';
//  should be moved to different style js



function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            < Header />
            <Component {...pageProps}/>
        </ThemeProvider>
        </>
    )
  
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
  