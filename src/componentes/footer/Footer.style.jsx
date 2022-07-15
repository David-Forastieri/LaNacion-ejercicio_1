import styled from "styled-components";

const FooterContainer = styled.div`
  margin: 20px 120px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #cccccc;
`;

const FooterTitle = styled.h1`
  font-family: 'Gulzar', serif;
  font-weight: 600;
  color: #006998;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 2px;
`;

const FooterDivPublicid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const FooterDiv = styled.div`
  width: 110px;
  height: 35px;
  border-radius: 3px;
  background-color: #2c2a2a;
`;

const FooterIcon = styled.div`
  display: flex;
  justify-content: space-between;

  .icon-footer{
    width: 23px;
    height: 23px;
    margin-right: 40px;
  }
`;

export {
  FooterContainer,
  FooterTitle,
  FooterIcon,
  FooterDivPublicid,
  FooterDiv
}