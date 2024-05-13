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
import FeedbackHome from './components/FeedbackHome';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import ShowQuery from './components/ShowQuery';
import TrainingFeedback from './components/TrainingFeedback';
import ShowProduct from './components/ShowProduct';
import ShowStudent from './components/ShowStudent';
import ShowTraining from './components/ShowTraining';
import LoginHome from './components/LoginHome';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/loggedin/home" element={<LoginHome/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feedback/home" element={<FeedbackHome/>}/>
        <Route path="/feedback/queryform" element={<QueryForm/>}/>
        <Route path="/feedback/productreview" element={<ProductReview/>}/>
        <Route path="/feedback/studentfeedback" element={<StudentFeedback/>}/>
        <Route path="/feedback/trainingfeedback" element={<TrainingFeedback/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/home" element={<AdminHome/>}/>
        <Route path="/admin/queryform" element={<ShowQuery/>}/>
        <Route path="/admin/productreview" element={<ShowProduct/>}/>
        <Route path="/admin/trainingfeedback" element={<ShowTraining/>}/>
        <Route path="/admin/studentfeedback" element={<ShowStudent/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
