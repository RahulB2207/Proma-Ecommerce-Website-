import React from "react";
import { useState,useContext } from "react";
import { Badge, Box,Button, Typography } from "@mui/material";
import "../../Css/Header/Header.css";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile.jsx";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";



const CustomButton = () =>{
  const[open,setOpen] = useState(false);
  const {account,setAccount} = useContext(DataContext);
  const{cartItems} = useSelector(state => state.cart);
 
const openDialog =() =>{
  setOpen(true);
}



    return(
      <Box className="CustomButton">
        <Box className='Buttons'>
            <StoreIcon/>
             <Typography className="seller">Become a Seller </Typography>
        </Box>

        <Box className='Buttons'>
            <PersonPinIcon/>
            {
              account ? <Profile account={account} setAccount={setAccount}/>
              :
              <Button variant="contained" className="header_login_button" style={{backgroundColor:'white', color:'#002244',fontWeight:'500'}} onClick={openDialog} >Sign-In</Button>
            }
           
       </Box>

     
       <Box className='Buttons' style={{display:'flex'}} >
       <Link to='/cart' style={{textDecoration:'none',color:'inherit'}}>
            <Badge badgeContent={cartItems?.length} color='secondary'>
             <ShoppingCartIcon/>
             </Badge>
             <Typography>Cart </Typography>
             </Link>
       </Box>
       

       <Box className='Buttons'>
            <Typography>More</Typography>
       </Box>
       <LoginDialog open = {open} setOpen={setOpen}/>
         
        
        
      </Box>
    )
}

export default CustomButton;