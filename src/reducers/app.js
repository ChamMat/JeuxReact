import { TIME_FRAME } from 'src/actions/hero';


const initialState = {
  hero: {
    compteAnimationTour: 0,
    width: '32',
    height: '32',
    index: 0,
    idle: true,
    walk: false,
    direction: 1,
    posX: '450',
    posY: '315',
  },
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TIME_FRAME:
      // console.log('idle = ' + action.herosDatas.idle);
      // console.log('walk = ' + action.herosDatas.walk);
      // console.log('');

      return {
        ...state,
        hero: {
          compteAnimationTour: action.herosDatas.compteAnimationTour,
          width: '32',
          height: '32',
          index: action.herosDatas.index,
          idle: action.herosDatas.idle,
          walk: action.herosDatas.walk,
          direction: action.herosDatas.direction,
          posX: '450',
          posY: '315',
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
