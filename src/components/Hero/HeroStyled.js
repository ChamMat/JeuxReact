import styled from 'styled-components';


const HeroStyled = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-image: url(${(props) => props.imageSprite});
  background-size:contain;
  position:absolute;
  top: ${(props) => props.posY}px;
  left: ${(props) => props.posX}px;
  transform: scaleX(${(props) => props.direction});
`;


export default HeroStyled;
