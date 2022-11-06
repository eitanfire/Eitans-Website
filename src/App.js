import './App.css';
import Header from './components/Header';
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import EitansIntro from './pages/EitansIntro';
import ContactForm from './pages/ContactForm';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
// import Modal from './components/Modal';

function App() {
  return (

    <div className="App">
      <Header className='col col-12' />
      <Routes>
        {/* <Route path='modal' element={<Modal />}/> */}
        <Route path='/' element={<HomePage />} />
        <Route path='read-more' element={<EitansIntro />} />
        <Route path='contact' element={<ContactForm />} />
      </Routes>
      <div>
        <Footer className='col col-9' />
      </div>
    </div>

  );
}

export default App;