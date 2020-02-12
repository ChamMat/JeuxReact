// == Import npm
import React from 'react';
import Hero from 'src/containers/Hero';
import AppStyled from './AppStyled';

// == Import


// == Composant
const App = () => (
  <AppStyled className="app">
    <div className="montain">
      <div className="road">
        <Hero />
      </div>
    </div>
  </AppStyled>
);

// == Export
export default App;
