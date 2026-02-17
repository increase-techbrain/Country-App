import {  Routes, Route, } from "react-router-dom";
import Home from "./Component/Home";
import CountryDetail from "./Component/CountryDetail";



function App() {

  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition ">
      
        
        <Routes>
          
          <Route path="/" element={<Home  />} />
          <Route path="country/:name" element={<CountryDetail />} />
        </Routes>
      
    </div>
  );
}
export default App;
