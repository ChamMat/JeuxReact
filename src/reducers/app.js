import { TIME_FRAME } from 'src/actions/hero';


const initialState = {
  hero: {
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
      return {
        ...state,
        hero: {
          width: '32',
          height: '32',
          index: action.herosDatas,
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
