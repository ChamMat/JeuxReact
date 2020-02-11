import React from 'react';
import HeroStyled from './HeroStyled';
import heroIdle from './sprite/idle/heroIdle';


const Hero = () => {
  const imageSpriteHero = heroIdle[3];

  return (
    <HeroStyled
      imageSpriteHero={imageSpriteHero}
    />
  );
};


export default Hero;
