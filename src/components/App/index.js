// == Import npm
import React from 'react';
import Hero from 'src/components/Hero';
import AppStyled from './AppStyled';

// == Import


// == Composant
const App = () => (
  <AppStyled className="app">
    <div className="montain">
      <div className="road">
        <Hero
          spriteIndexHeroIdle="1"
        />
      </div>
    </div>
  </AppStyled>
);

// == Export
export default App;
