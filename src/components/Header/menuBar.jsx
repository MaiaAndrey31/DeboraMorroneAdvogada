import React from 'react';  
import MenuIcon from '@mui/icons-material/Menu';  
import { theme } from '../../styles/theme';  
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ color: theme.colors.secondary  }}
      >
        Menu
        <MenuIcon style={{ color: theme.colors.secondary, width: '60px' }} />  

      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        
      >
        <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary  }} href="#home" >        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link">Home</MenuItem>  
      </AnchorLink>
      <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary }} href="#about">        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link">Sobre mim</MenuItem>  
      </AnchorLink>
      <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary }} href="#services">        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link">Serviços</MenuItem>  
      </AnchorLink>
      <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary }} href="#blog">        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link">Blog</MenuItem>  
      </AnchorLink>
      <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary }} href="#review">        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link" >Depoimentos</MenuItem>  
      </AnchorLink>
      <AnchorLink style={{ textDecoration: 'none', color: theme.colors.primary }}  href="#contact">        <MenuItem style={{backgroundColor: theme.colors.secondary}}  onClick={handleClose} activeClassName="active-link">Contatos</MenuItem>  
      </AnchorLink>
      </Menu>
    </div>
  );
}