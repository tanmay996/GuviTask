import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Nopage from './components/Nopage';

export default function MainLayout() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='*' element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
