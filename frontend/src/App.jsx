import './App.css'
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import ProductList from './ProductList';
import Footer from './Footer';



function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />

      </Routes>
      <Footer/>
    </Router>
    </>
    )
}

export default App
