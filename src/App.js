// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Navigation from './component/navigation';
import MainContent from './component/mainContent';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
