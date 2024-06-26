//rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//css
import './App.css';
//components
import Footer from './components/Footer/Footer';
import Navbar from './components/Nabvar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
   

  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
