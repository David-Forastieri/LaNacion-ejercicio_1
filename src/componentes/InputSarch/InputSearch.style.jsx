import styled from "styled-components";

const Search = styled.input`
  padding: 10px;
  padding-bottom: 15px;
  border: 1px solid #cccccc;
  border-right: none;
  font-size: 14px;
  border-radius: 3px;
  z-index: 100;
  background: transparent;
  width: 170px;
  height: 35px;
  margin-left: 25px;
`;

const SearchContainer = styled.div`
  border: solid 1px #ccc;
  border-left: none;
  height: 35px;
  margin-left: -1px;
  padding-right: 6px;
  

.icon_search{
  width: 19px;
  padding: 0px;
}
`;

export {
  SearchContainer,
  Search
};