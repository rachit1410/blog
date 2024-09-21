import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './AppWrite/auth'
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components'
import {Outlet} from 'react-router-dom'
import './App.css'


function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{setloading(false)})
  }, [])
  
  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-purple-500'>
    <div className='w-full block' >
      <Header/>
      <main>
      <Outlet />
      </main>
      <Footer/>
    </div>
  </div> ): null
}

export default App
