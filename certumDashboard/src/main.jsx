import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './Components/Layout.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Dashboard } from './Dashboard/Dashboard.jsx'
import { Certificates } from './Certificates/Certificates.jsx'
import { Orders } from './Orders/orders.jsx'
import { SSLTools } from './SSLTools/SSLTools.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>

      <Route element={<Layout/>} >
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Certificates' element={<Certificates/>}/>
        <Route path='/Orders' element={<Orders/>}/>
        <Route path='/SSL-ToolS' element={<SSLTools/>}/>


      </Route>
    </Routes>
   
   </BrowserRouter>
  </React.StrictMode>,
)
