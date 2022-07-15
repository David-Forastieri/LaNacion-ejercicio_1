import React from 'react'
import Buttons from '../Buttons/Buttons';
import InputSearch from '../InputSarch/InputSearch';
import MenuHam from '../menu/MenuHam';
import { HeaderContainer, HeaderTitle, NavBar, NavBarLeft } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <NavBarLeft>
          <MenuHam/>
          <p>menú</p>
          <InputSearch type='search' text={'Buscar'} />
        </NavBarLeft>
        <HeaderTitle>La Nacion</HeaderTitle>
        <div>
          <Buttons title={'suscribete'} />
          <Buttons title={'ingresar'} primaryStyle={'primary'} />
        </div>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header;
