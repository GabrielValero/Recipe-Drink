import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Head from 'next/head'
import {UserProvider} from '../context/user'
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
  	<UserProvider>
	    <Provider store={store}>
	    	<Head>
	    		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

	    	</Head>
	      <Component {...pageProps} />
	    </Provider>
  	</UserProvider>
  )
}