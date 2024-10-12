import React from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'


// components
// header
import Header from './components/Header'

// pages
// home
import Home from './pages/Home'
// user
import Users from './pages/users/Users'

const App = () => {

  // hooks
  const pathname = useLocation().pathname
  return (
    <div className='w-[100vw] h-[100vh]'>
      {
        !pathname?.startsWith("/users") && <Header />
      }
      <Routes>
        {/* home */}
        <Route path='/' element={<Home />}></Route>
        {/* user */}
        <Route path='/users' element={<Users />}></Route>
      </Routes>
    </div>
  )
}

export default App