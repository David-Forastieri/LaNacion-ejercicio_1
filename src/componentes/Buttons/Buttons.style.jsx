import styled, {css} from "styled-components";

const GeneralButton = styled.button(
  (props) =>
    css({
      backgroundColor:props.primary ? '#ffffff' : '#ffff24' ,
      border:props.primary ? '1px solid #0074c4' : '1px solid #cccccc' ,
      color:props.primary ? '#0074c4' : '#000000' ,
      cursor: 'pointer',
      textTransform: 'uppercase',
      borderRadius: '3px',
      fontSize: '0.75em',
      padding: '0.55em 1.5em',
      fontWeight: 'bold',
      height: '33px',
      margin:'0px 10px',

      '&:hover':{
        backgroundColor:props.primary ? '#2392c6' : '#fcfc60' ,
        color:props.primary ? '#ffffff' : '#000000' ,
      }
      
  }),
);

export {
  GeneralButton
};