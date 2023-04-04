// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LoginPage from './assets/components/Login'
// import Navbar from './assets/components/Navbar'
// import MainPage from './assets/MainPage'
// import HotelsPage from './assets/components/HotelsPage'
// import RestaurantsPage from './assets/components/RestaurantsPage'
// import RestaurantList from './assets/components/RestaurantList'
// import RestaurantDetail from './assets/components/RestaurantDetail'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       {/* <LoginPage/> */}
//       {/* <Navbar/> */}
//       {/* <MainPage/> */}
//       {/* <HotelsPage/> */}
//       {/* <RestaurantsPage/> */}

     
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';
import RestaurantContainer from './assets/components/RestaurantContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import HotelsPage from './assets/components/HotelsPage';
import MainPage from './assets/MainPage';
import HotelDetail from './assets/components/HotelDetail';
import RestaurantDetail from './assets/components/RestaurantDetail';
import LoginPage from './assets/components/Login';

function App() {
  return (
    <div style={{ backgroundColor: 'lightgray',padding: '60px 20px 20px 20px' }}>
    
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/main" element={<MainPage style={{ backgroundColor: 'lightgray' }} />} />
    <Route path="/hotels" element={<HotelsPage />} />
    <Route path="/hotels/:id" element={<HotelDetail />} />
    <Route path="/restaurants" element={<RestaurantContainer />} />
    <Route path="/restaurants/:id" element={<RestaurantDetail />} />
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;


