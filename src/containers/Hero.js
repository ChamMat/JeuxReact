import { connect } from 'react-redux';
import { timeFrame } from 'src/actions/hero';

import Hero from 'src/components/Hero';


const mapStateToProps = (state) => (
  {
    datas: state.hero,
  }
);


const mapDispatchToMainReducer = (dispatch) => ({
  newTimeFrame: (value) => {
    dispatch(timeFrame(value));
  },
});

const HeroContainer = connect(
  mapStateToProps,
  mapDispatchToMainReducer,
)(Hero);

export default HeroContainer;
