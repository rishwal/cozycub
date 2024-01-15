import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth'
import Header from './components/NavBar/Header';
import Home from './components/Home/Home'
import ViewProductus from './components/View Productus/ViewProducts';
import Search from './components/Search/Search';
import Categories from './components/category/Categories';
import Cart from './components/Cart/Cart'
import Data from './components/Data/Data-object/Data';
import Shop from './components/shop/Shop';
import Payment from './components/Payment/Payment';
import BuyNow from './components/BuyNow/BuyNow';
import Admin from './components/Admin/Admin-Home/AdminHome';
import Userdetails from './components/Admin/User-details/Userdetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AdminNavbar from './components/Admin/Admin-Nav/AdminNavbar';
import Products from './components/Admin/Products/Products'
import Updateproduct from './components/Admin/Products/Updateproduct';
import CreateProduct from './components/Admin/Add Product/CreateProduct';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';


function App() {



  return (
    <Data>
      <div className="App">
        <Toaster />
        <BrowserRouter basename='/cozycub'>
          <Header />

          <Routes>

            <Route path='/' element={<Home />} ></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='product-categories' element={<Categories />}>
              <Route path=':type'>
              </Route>
            </Route>

            <Route path='search/product' >
              <Route path=':id' element={<ViewProductus />}></Route>
            </Route>

            <Route path='/product'>
              <Route path=':id' element={<ViewProductus />}></Route>
            </Route>

            <Route path='buy' element={<BuyNow />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/login' element={<Auth />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/payment' element={<Payment />}></Route>

            <Route path='/admin/*' element={
              <>
                <AdminNavbar />
                <Routes>

                  <Route path='/' element={<Admin />}></Route>
                  <Route path='/create-products' element={<CreateProduct />} />
                  <Route path='/user-details'>
                    <Route path=':id' element={<Userdetails />}></Route>
                  </Route>
                  <Route path='/products' element={<Products />}></Route>
                  <Route path='/products/:id' element={<Updateproduct />}></Route>

                </Routes>

              </>
            }></Route>

            <Route path='*' element={<PageNotFound />} ></Route>

          </Routes>


          <Footer />
        </BrowserRouter>




      </div>
    </Data >
  );
}

export default App;
