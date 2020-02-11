import styled from 'styled-components';
import sky from './country-platform-back.png';
import montain from './country-platform-forest.png';
import road from './country-platform-tiles-example.png';

const AppStyled = styled.div`
  height:600px;
  width: 900px;
  margin: 2rem auto;
  background-image: url(${sky});
  background-repeat:none;
  background-size:contain;

  .montain {
    height:600px;
    width: 900px;
    background-image: url(${montain});
    background-size:contain;
    position:absolute;
  }

  .road {
    height:400px;
    width: 900px;
    background-image: url(${road});
    background-size:contain;
    position:relative;
    top: 200px;
  }
  
`;

export default AppStyled;
