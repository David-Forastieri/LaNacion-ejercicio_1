import styled from "styled-components";

const HeaderContainer = styled.div`
  display: block;
  border-bottom: 1px solid #cccccc;
  padding-top: 15px;
  margin-bottom: 30px;
  width: 100%;
  z-index: 1000;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  aling-items: center;

`;

const HeaderTitle = styled.h1`
  font-family: 'Gulzar', serif;
  font-weight: 600;
  color: #006998;
  text-transform: uppercase;
  font-size: 45px;
  letter-spacing: 2px;
`;

const NavBarLeft = styled.div`
  display: flex;
  flex-direction: row;

  p{
    text-transform: uppercase;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
  }
`;

export {
  HeaderContainer,
  NavBar,
  HeaderTitle,
  NavBarLeft
};