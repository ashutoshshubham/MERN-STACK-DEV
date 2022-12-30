import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Aboutus from './components/Aboutus';
import EventHandling from './components/EventHandling';




function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route element = {<Navigate to ='/homepage'/>} path='/' />   {/* to redirect to given link */}
          <Route element = {<Home/>} path='homepage' />
          <Route element = {<Login/>} path='loginpage' />
          <Route element = {<Aboutus/>} path='about' />
          <Route element = {<EventHandling/>} path='event' />
          <Route element = {<NotFound/>} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




// to import, put '<' then write name of file to be import, press enter then close the tag
