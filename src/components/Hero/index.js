import React from 'react';
import PropTypes from 'prop-types';

import HeroStyled from './HeroStyled';
import heroIdle from './sprite/idle/heroIdle';
import heroWalk from './sprite/walk/heroWalk';


const Hero = ({ datas, newTimeFrame }) => {

  const heroData = {
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

  let imageSprite = '';

  // Ceci est un temporiseur afin que l'animation change tout les 7 tours
  if (datas.idle) {
    imageSprite = heroIdle[heroData.index];
    if (heroData.compteAnimationTour === 10) {
      heroData.index += 1;
      if (heroData.index === 4) {
        heroData.index = 0;
      }
      heroData.compteAnimationTour = 0;
    }
  }

  if (datas.walk) {
    imageSprite = heroWalk[heroData.index];
    if (heroData.compteAnimationTour >= 5) {
      heroData.index += 1;
      if (heroData.index === 6) {
        heroData.index = 0;
      }
      heroData.compteAnimationTour = 0;
    }
  }

  const handleKeyup = (evt) => {
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      heroData.walk = false;
      heroData.idle = true;
      heroData.compteAnimationTour = 0;
      heroData.index = 0;
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 37) {
      heroData.idle = false;
      heroData.walk = true;
      heroData.direction = -1;
    }
    if (evt.keyCode === 39) {
      heroData.idle = false;
      heroData.walk = true;
      heroData.direction = 1;
    }
  };


  const handleTimeFrame = () => {
    heroData.compteAnimationTour += 1;
    if (heroData.walk) {
      heroData.posX += 5 * heroData.direction;
    }

    clearTimeout(handleTimeFrame);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyup);

    newTimeFrame(
      heroData,
    );
  };

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyup);

  setTimeout(handleTimeFrame, 20);

  // setInterval(handleTimeFrame, 1000);

  return (
    <HeroStyled
      imageSprite={imageSprite}
      posX={datas.posX}
      posY={datas.posY}
      width={datas.width}
      height={datas.height}
      direction={datas.direction}
    />
  );
};

Hero.propTypes = {
  datas: PropTypes.object.isRequired,
  newTimeFrame: PropTypes.func.isRequired,
};


export default Hero;
