import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Category from './components/Category';
import Budget from './components/Budget';
import Compare from './components/Compare';
import Dealer from './components/Dealer';
import Sales from './components/Sales';
import LoanCalculator from './components/LoanCalc';
import Search from './components/Search';
import Suv from './components/Suv';
import Sedan from './components/Sedan';
import Luxury from './components/Luxury';
import Underten from './components/Underten';
import Underfifteen from './components/Underfifteen';
import Undertwenty from './components/Undertwenty';
import Underthirty from './components/Underthirty';
import Underfifty from './components/Underfifty';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/suv" element={<Suv/>} />
        <Route path="/sedan" element={<Sedan />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path='underten' element={<Underten/>}></Route>
        <Route path='underfifteen' element={<Underfifteen/>}></Route>
        <Route path='undertwenty' element={<Undertwenty/>}></Route>
        <Route path='underthirty' element={<Underthirty/>}></Route>
        <Route path='underfifity' element={<Underfifty/>}></Route>
      </Routes>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <Compare />
      <Category />
      <Budget />
      <Dealer />
      <LoanCalculator />
      <Sales />
      <Footer/>
    </>
  );
}

export default App;


