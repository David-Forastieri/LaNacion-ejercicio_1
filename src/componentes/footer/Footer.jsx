import React from 'react'
import { FooterContainer, FooterTitle, FooterIcon, FooterDivPublicid, FooterDiv } from './Footer.style';
import { FaFacebookF,
  FaTwitter,
  FaRss,
  FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcon>
      <FaFacebookF className='icon-footer' />
      <FaTwitter className='icon-footer'/>
      <FaInstagram className='icon-footer'/>
      <FaRss className='icon-footer'/>
      </FooterIcon>
      <FooterTitle>La Nacion</FooterTitle>
      <FooterDivPublicid>
        <FooterDiv></FooterDiv>
        <FooterDiv></FooterDiv>
      </FooterDivPublicid>
    </FooterContainer>
  )
}

export default Footer;