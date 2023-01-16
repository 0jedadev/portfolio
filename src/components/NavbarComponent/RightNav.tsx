import * as React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



interface props {
  open: boolean
};
const ButtonStyle = {
  padding: "0",
  color: "#ABB2BF"
}
const MenuStyle = {
  backgroundColor:  "#ABB2BF",

}
const HamburguerUL = styled.ul`
list-style: none;
display: flex;


@media (max-width: 300px) {
    flex-flow: column nowrap;
    background: rgb(2,120,224);
    background: linear-gradient(90deg, rgba(2,120,224,1) 100%, rgba(0,251,255,1) 100%); transform: ${({ open }: props) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top:0;
    right:0;
    height: 100vh;
    width: 100vw;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    font-size: 15px;
  }

  /* Media Query for Tablets Ipads portrait mode */
  @media (min-width: 300px) and (max-width: 760px) {
    flex-flow: column nowrap;
    background: rgb(2,120,224);
    background: linear-gradient(90deg, rgba(2,120,224,1) 100%, rgba(0,251,255,1) 100%); transform: ${({ open }: props) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top:0;
    right:0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    font-size: 20px;
  }
`;
const HamburguerLI = styled.li`
color: #ABB2BF;
padding: 10px;
span {
  color: #C778DD;
}
p{
  &:hover{
    color: #fff;
    cursor: pointer;
  }
}
`;
const RightNav = ({ open }: props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HamburguerUL open={open}>
      <Link style={{ textDecoration: 'none' }} to="/home"><HamburguerLI><p><span>#</span>home</p></HamburguerLI></Link>
      <Link style={{ textDecoration: 'none' }} to="/projects"><HamburguerLI><p><span>#</span>projetos</p></HamburguerLI></Link>
      <Link style={{ textDecoration: 'none' }} to="/about"><HamburguerLI><p><span>#</span>sobre</p></HamburguerLI></Link>
      <Link style={{ textDecoration: 'none' }} to="/contacts"> <HamburguerLI><p><span>#</span>contato</p></HamburguerLI></Link>
      <HamburguerLI>
        <Button
          style={ButtonStyle} endIcon={<KeyboardArrowDownIcon/>}
        >
          EN
        </Button>

      </HamburguerLI>
    </HamburguerUL>
  )
}

export default RightNav
