import react from 'react';
import "../../Css/Header/Header.css";
import {AppBar,Toolbar,Box,styled,IconButton,Drawer,List,ListItem} from "@mui/material";
import logo from "../../images/E_logo.png"
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const CustomButtonWrapper = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))

const Image = styled('img')(({theme})=>({
  [theme.breakpoints.down('md')]:{
    width:'7rem',
    height:'3.5rem'
  }
}))

const Menu = styled(MenuIcon)(({theme})=>({
  color:'white',
  fontSize:'2.2rem',
  display:'none',
  [theme.breakpoints.down('md')]:{
    display:'block',
  }
}))



const Header = () =>{
  
  const[open,setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  const list = () =>(
    <Box onClick={handleClose} style={{backgroundColor:'#002244',height:'100%'}}>
      <List >
        <ListItem >
        <CustomButton/>
        </ListItem>
      </List>
    </Box >
  );

  


    return(
      <AppBar className='appBar'>
        <Toolbar className='toolBar'>
          <Link to='/'>
           <Box>
             <Image src={logo} alt="logo" className='header_logo'/>
           </Box>
          </Link>
        <Search/>
        <Menu onClick={handleOpen}>
          <MenuIcon/>
        </Menu>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <CustomButtonWrapper>
            <CustomButton/>
        </CustomButtonWrapper>
        </Toolbar>
      </AppBar>
    )
};

export default Header;