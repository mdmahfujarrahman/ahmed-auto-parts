import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Footer from './Pages/Sheard/Footer';
import Navbar from './Pages/Sheard/Navbar';

function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/purchase/:id" element={<Purchase />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
