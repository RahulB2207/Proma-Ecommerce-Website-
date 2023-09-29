import { Box, Typography,styled } from '@mui/material';
import React from 'react';
import { navData } from '../../constants/data';
import "../../Css/Home/Navbar.css";

const Component = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    padding:'2rem 0',
    [theme.breakpoints.down('lg')]:{
        flexWrap:'wrap'
    }
}));

 

const Navbar = () =>{
    return(
       <Component>
           {
              navData.map(data =>(
                <Box>
                    <img  src ={data.url} alt="nav"/>
                    <Typography className='navbar_text'>{data.text}</Typography>
                </Box>
              ))
           }
       </Component>
    )
}

export default Navbar;