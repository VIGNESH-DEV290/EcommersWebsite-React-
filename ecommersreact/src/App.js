import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Slides from './Slides';
import Cards from './Routes/Cards';
import data from './Routes/Data';
import Carts from './Routes/Carts';
import { useState } from 'react';
function App() {
  const [cartData,setCartData]=useState([])

  const handleCartData=(product)=>{
    console.log(product)
    setCartData((cartData)=>[...cartData,{data: product,quantity:1}])
  }
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Slides/> 
        <Routes>
        
          <Route path='/' element={<Cards  data={data} handleCartData={handleCartData}/>}></Route>
        </Routes>
        <Routes>
             <Route  path='/cart' element={<Carts data={cartData} />} />
       </Routes>

      </Router>
      
      
      
    </div>
  );
}

export default App;
