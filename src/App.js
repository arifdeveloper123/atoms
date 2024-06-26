import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/cards";
import PastCard from "./components/Exp-card/PastCard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Locations from "./components/Footerlinks/Locations";
import Footer from "./components/Footer/Footer";
import SubFooter from "./components/Subfooter/Subfooter";
import HotelDetail from "./components/cards/HotelDetail";



function App() {
  return (
    <div className="App">
     <Header/>
     <Filter/>
     <Router>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/hotel/:id" element={<HotelDetail/>} />
      </Routes>
    </Router>    
     <PastCard/>
     <Locations/>
     <Footer/>
     <SubFooter/>
    </div>
  );
}

export default App;