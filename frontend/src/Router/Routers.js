import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import TourDetail from '../Pages/TourDetail'
import Login from '../Pages/Login'
import Registaer from '../Pages/Registaer'
import Tours from '../Pages/Tours'
import Home from '../Pages/Home'
import SearchResult from '../Pages/SearchResult'
import ThankYou from '../Pages/ThankYou'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registaer/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Routers
