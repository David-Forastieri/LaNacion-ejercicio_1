import styled from "styled-components";

const OrderCard = styled.div`
  display: flex;
  flex-direction: row;
  `;

const BoxCard = styled.div`
  display: inline-block;
  width: 270px;
  height: 280px;
`;

const ImageBox = styled.div`
  width: 270px;
  height: 180px;
  box-sizing: border-box;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleNote = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 0px;
  cursor: pointer;
`;

const DataNote = styled.p`
  font-size: 0.9rem;
  color: #5a5a5a;
`;

export{
  BoxCard,
  ImageBox,
  OrderCard,
  TitleNote,
  DataNote
};