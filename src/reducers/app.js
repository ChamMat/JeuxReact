import { TIME_FRAME } from 'src/actions/hero';


const initialState = {
  hero: {
    compteAnimationTour: 0,
    width: '32',
    height: '32',
    index: 0,
    idle: true,
    walk: false,
    direction: 'right',
    posX: '450',
    posY: '315',
  },
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TIME_FRAME:
      console.log(action);
      return {
        ...state,
        hero: {
          compteAnimationTour: action.herosDatas.compteAnimationTour,
          width: '32',
          height: '32',
          index: action.herosDatas.index,
          idle: true,
          walk: false,
          direction: 'right',
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
