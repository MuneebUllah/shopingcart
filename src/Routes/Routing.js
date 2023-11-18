import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../view/pages/Cart'
import Products from '../view/pages/Products'

export default function Routing() {
  return (
    <BrowserRouter>
        <div className='container'>
        <Header />
        <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  )
}
