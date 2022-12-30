
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';







function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Navigate to='/homepage' />} path='/' />
          <Route element={<Home />} path='homepage' />
          <Route element={<Form />} path='loginpage' />
          <Route element={<NotFound/>} path='*'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
