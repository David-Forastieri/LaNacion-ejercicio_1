import styled from "styled-components";

const ContainerNotes = styled.div`
  width: auto;
  display: flex;
  margin-right: 35px;
  padding-bottom: 110px;
  flex-direction: column;
  height: 50%;
  z-index: 1000;
`;

const TitleSection = styled.p`
  font-family: 'Bitter', serif;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.3125rem;
  letter-spacing: 1px;
  margin: 0px;
  margin-bottom: 15px;
  padding: 0px;
  border-bottom: solid 3px #000;
  width: 28%;
`;

const SectionCard = styled.div`
  width: 950px;
`;

const OrderItemTag = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  
  a{
    font-size: 1rem;
    font-weight: 400;
    margin-right: 17px;
    margin-bottom: 20px;
    color: #0074c4;
    text-decoration: none;
  }

  a:hover{
    color: #2392c6;
  }
  `;

  const ButtonMoreNotes = styled.button`
    background-color: #ffffff;
    border: 1px solid #0074c4;
    color: #0074c4;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 3px;
    font-size: 0.75em;
    padding: 0.55em 1.5em;
    font-weight: bold;
    height: 33px;
    max-width: 270px;
    margin-left: 320px;

      &:hover{
        background-color: #2392c6;
        color: #ffffff;
      }
  `;


export{
  ContainerNotes,
  TitleSection,
  SectionCard, 
  OrderItemTag,
  ButtonMoreNotes
};