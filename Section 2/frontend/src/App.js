import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Aboutus from './components/Aboutus';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Chat from './components/Chat';
import Login2 from './components/Login2';
import SignUp from './components/SignUp';
import ManageUser from './components/ManageUser';
import Product from './components/Product';
import ManageProduct from './components/ManageProduct';
import UpdateUser from './components/UpdateUser';



function App() {
  return (
    <div>
      <Toaster position="top-center"/>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />   {/* to redirect to given link */}
          <Route element={<Home />} path='homepage' />
          <Route element={<Login />} path='loginpage' />
          <Route element={<Aboutus />} path='about' />
          <Route element={<EventHandling />} path='event' />
          <Route element={<StateManagement />} path='state' />
          <Route element={<Chat />} path='chat' />
          <Route element={<Login2 />} path='login2' />
          <Route element={<SignUp />} path='signup' />
          <Route element={<ManageUser />} path='manageuser' />
          <Route element={<Product />} path='product' />
          <Route element={<ManageProduct />} path='manageproduct' />
          <Route element={<UpdateUser />} path='updateuser/:id' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




// to import, put '<' then write name of file to be import, press enter then close the tag
