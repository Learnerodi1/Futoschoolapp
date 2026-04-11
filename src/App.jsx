import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TopBarNav } from './component/pages/home/TopBarNav'
import { Route, Routes } from 'react-router-dom'
import { NavLayout } from './component/pages/home/NavLayout'
import { Users } from './component/pages/main/users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout />} >
          <Route path='users' element={<Users />} />
          <Route path='*' element />

        </Route>
      </Routes>
    </>
  )
}

export default App
