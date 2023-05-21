import React from 'react';
import '../App.css';

import Navigation from './../component/Navigation';
import MainContent from './../component/MainContent';
import Footer from './../component/Footer';

function Home() {
    return (
      <div>
        <Navigation />
        <MainContent />
        <Footer />
        
      </div>
    );
  }
  
  export default Home;