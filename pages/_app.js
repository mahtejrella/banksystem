import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return(
    <div className="">
        <Component {...pageProps} />
    </div>
  )
}

export default MyApp
