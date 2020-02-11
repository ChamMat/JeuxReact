import styled from 'styled-components';


const HeroStyled = styled.div`
  height: 32px;
  width: 32px;
  ${'' /* background-color: ${image}; */}
  background-image: url(${(props) => props.imageSpriteHero});
  background-size:contain;
  position:absolute;
`;


export default HeroStyled;
