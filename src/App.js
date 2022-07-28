import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './utilis/Protected'
import Header from './components/Header'
import { Route,Routes,BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Protected Component={Home} />} />
        <Route path='/login'  element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;