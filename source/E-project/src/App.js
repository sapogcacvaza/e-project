
import './App.css';
import Navbar from './components/navbar';
import HomeMain from './components/home/homeMain';
import ShopMain from './components/shop/shopMain';
import Login from './components/login/login';
import ShopDetail from './components/shopDetail';
import Search from './components/search/searchMain';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import CategoryShop from './components/categoryShop/categoryShop';
import Contact from './components/contact_us/contact';
import Help from './components/help/help';
import Register from './components/register/register';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/shop' element={<ShopMain />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop-detail/:id' element={<ShopDetail />} />
        <Route path='/search/' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
        <Route path="shop/category/:categoryId" element={<CategoryShop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
