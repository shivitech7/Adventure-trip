import './App.css';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Discover />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
