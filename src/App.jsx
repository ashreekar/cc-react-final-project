import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authService } from './appwrite/auth.js'
import { login, logout } from './utils/auth.slice.js'
import Header from "./component/Header.jsx"
import Footer from "./component/Footer.jsx"

function App() {
  const [laoding, setLaoding] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout())
        }
      })
      .catch((err) => {
        setLaoding(false)
        console.log(err)
      })
      .finally(() => {
        setLaoding(false)
      })
  }, [])

  return !laoding ?
    (<div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          {/* <outlet></outlet> */}
        </main>
        <Footer />
      </div>
    </div>)
    :
    (<div>

    </div>)
}

export default App