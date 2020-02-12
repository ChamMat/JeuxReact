import React from 'react';
import PropTypes from 'prop-types';

import HeroStyled from './HeroStyled';
import heroIdle from './sprite/idle/heroIdle';


const Hero = ({ datas, newTimeFrame }) => {

  let heroData = {
    index: datas.index,
    idle: datas.idle,
    walk: datas.walk,
    direction: datas.direction,
    posX: datas.posX,
    posY: datas.posY,
    width: datas.width,
    height: datas.height,
    compteAnimationTour: datas.compteAnimationTour,
  };

  const imageSprite = heroIdle[heroData.index];
  if (heroData.index === 3) {
    heroData.index = 0;
  } else {
    //Ceci est un temporiseur afin que l'animation change tout les 7 tours
    if (heroData.compteAnimationTour === 7) {
      heroData.index += 1;
      heroData.compteAnimationTour = 0;
    }
  }

  const handleTimeFrame = () => {
    heroData.compteAnimationTour += 1;
    clearTimeout(handleTimeFrame);
    newTimeFrame(
      heroData,
    );
  };

  setTimeout(handleTimeFrame, 20);

  // setInterval(handleTimeFrame, 1000);

  return (
    <HeroStyled
      imageSprite={imageSprite}
      posX={datas.posX}
      posY={datas.posY}
      width={datas.width}
      height={datas.height}
    />
  );
};

Hero.propTypes = {
  datas: PropTypes.object.isRequired,
  newTimeFrame: PropTypes.func.isRequired,
};


export default Hero;
