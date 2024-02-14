import { useState } from 'react'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import HearderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import './App.css'
import {BrowserRouter , Routes , Route}from 'react-router-dom'
import EmployeeComponent from './Components/EmployeeComponent'

function App() {
  
  return (
    <>

    <BrowserRouter>

    <HearderComponent/>

    <Routes>

      {/* // http://localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>

      {/* // http://localhost:3000/employees */}
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

       {/* // http://localhost:3000/edit-employee/1 */}
      <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>

      </Routes>

    <FooterComponent/>
    
    </BrowserRouter>
    </>
  )
}

export default App
