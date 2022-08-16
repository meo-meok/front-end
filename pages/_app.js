// // import '../styles/globals.css'  CSS파일 import할 것

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import Layout from '../src/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
  // <Layout>
  <Component {...pageProps} />
  // </Layout>
  )
}

export default MyApp
