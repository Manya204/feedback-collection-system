import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Feedback from './components/Feedback';
import QueryForm from './components/QueryForm';
import ProductReview from './components/ProductReview';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/feedback/queryform" element={<QueryForm/>}/>
        <Route path="/feedback/productreview" element={<ProductReview/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
