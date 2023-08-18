import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from "./pages/HomePages";
import AboutPage from "./pages/AboutPage";
import MealInfo from "./pages/MealInfo";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/meal/:id" element={<MealInfo/>} />
        <Route path="/ingredient/:name" element={<SearchPage />} />
      </Routes>

  );
};
export default App;
