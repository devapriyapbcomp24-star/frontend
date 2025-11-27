
import React from 'react'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'
import './App.css';


const App = () => {
  return (
    <>
    <Router>
<nav className='bg-gray-800 shadow-1g'> 
<div className='max-w-7x1 mx-auto px-4 sm:px-6 1g:px-8'>
<ul className='flex space-x-6 py-4'>
  <li>
    <Link to="/" className='text-white hover:text-grey-300'>Home</Link>
  </li>

  <li>
    <Link to="/Products" className='text-white hover:text-grey-300'>Products</Link>
  </li>

  <li>
    <Link to="/addproduct" className='text-white hover:text-grey-300'>AddProduct</Link>
  </li>

</ul>
</div>


</nav>
<Routes>

  <Route path='/'element = {<Home/>} />
  <Route path='/Products'element = {<Products/>} />
  <Route path='/addproduct'element = {<AddProduct />} />

</Routes>





    </Router>
    
    
    </>
  )
}

export default App