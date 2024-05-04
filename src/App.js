import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Feedback from './components/Feedback';
import QueryForm from './components/QueryForm';
import ProductReview from './components/ProductReview';
import Login from './components/Login';
import Signup from './components/Signup';
import StudentFeedback from './components/StudentFeedback';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feedback/queryform" element={<QueryForm/>}/>
        <Route path="/feedback/productreview" element={<ProductReview/>}/>
        <Route path="/feedback/studentfeedback" element={<StudentFeedback/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
