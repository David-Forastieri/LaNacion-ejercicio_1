import React from 'react'
import { SearchContainer, Search } from './InputSearch.style';
import { FaSistrix } from "react-icons/fa";

const InputSearch = ( {text} ) => {
  return (
    <>
    <Search placeholder={text}>
      
    </Search>
    <SearchContainer>
      <FaSistrix className='icon_search'/>
    </SearchContainer>
    </>
  )
}

export default InputSearch;