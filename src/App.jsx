import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { NavLayout } from './component/pages/home/NavLayout'
import { Users } from './component/pages/main/UsersPage/users'
import { DashBoard } from './component/pages/main/DashboardPage/dashboard'
import { Course } from './component/pages/main/CoursesPage/course'
import { Material } from './component/pages/main/MaterialPage/material'
import { Setting } from './component/pages/main/SettingsPage/setting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<NavLayout />} >
          <Route index element={<DashBoard/>} />
          <Route path='users' element={<Users />} />
          <Route path='courses' element={<Course/>} />
          <Route path='materials' element={<Material/>} />
          <Route path='settings' element={<Setting/>} />
          <Route path='*' element />

        </Route>
      </Routes>
    </>
  )
}

export default App
