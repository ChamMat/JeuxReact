import React from 'react';
import PropTypes from 'prop-types';

import HeroStyled from './HeroStyled';
import heroIdle from './sprite/idle/heroIdle';


const Hero = ({ datas, newTimeFrame }) => {

  let index = datas.index;
  const imageSprite = heroIdle[index];
  if (index === 3) {
    index = 0;
  } else {
    index += 1;
  }

  const handleTimeFrame = () => {
    clearTimeout(handleTimeFrame);
    newTimeFrame(
      index,
    );
  };

  setTimeout(handleTimeFrame, 150);

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
