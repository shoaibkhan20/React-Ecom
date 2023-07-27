import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Home from './Components/Home/Home';
import About from './Components/About'
import ProductDetails from './Components/ProductDetails'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route element={<App/>}>
            <Route index element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="*" element={
                <h1 className='h-[400px] grid place-items-center'>404 Page Not Found</h1>
             } />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)