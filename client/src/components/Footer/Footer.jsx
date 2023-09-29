
import { Box, Typography,styled } from "@mui/material";
import logo from "../../images/E_logo.png";

const Component = styled(Box)`
   text-align:center;
   background:#232F3E;
   color:white;
`

const Container = styled(Box)(({theme})=>({
  display:'flex',
  padding:'2rem 2rem',
  justifyContent:'space-evenly',
  [theme.breakpoints.down('md')]:{
     flexWrap:'wrap'
  }
}))

const Heading = styled(Typography)`
  font-size:1.1rem;
  font-weight:600;
  margin-bottom:10px;
`
const Info = styled(Typography)`
   font-size:14px;
   line-height:1.5rem;
`

const Image = styled('img')(({theme})=>({
    height:'5rem',
    width:'11rem;',
    marginBottom:'1rem'
}))

const Footer = () =>{
    return(
   <Component>     
    <Container>
        <Box style={{margin:'10px'}}>
            <Heading component='h5'>Get to know Us</Heading>
            <Info>About Us</Info>
            <Info>Careers</Info>
            <Info>Press Releases</Info>
            <Info>Proma Science</Info>
        </Box>

        <Box>
        <Heading component='h5'>Connect With Us</Heading>
            <Info>Facebook</Info>
            <Info>Twitter</Info>
            <Info>Instagram</Info>
        </Box>

        <Box>
           <Heading component='h5'>Make Money with Us</Heading>
            <Info>Sell on Proma</Info>
            <Info>Proma Global Selling</Info>
            <Info>Become an Affiliate</Info>
            <Info>Fulfilment by Proma</Info>
            <Info>Advertise Your Products</Info>
        </Box>

        <Box>
        <Heading component='h5'>Let Us Help You</Heading>
            <Info>Your Account</Info>
            <Info>100% Purchase Protection</Info>
            <Info>Returns Centre</Info>
            <Info>Help</Info>
        </Box>
    </Container>
       <Image src={logo} alt='logo_img'/>
    </Component>
    )
}

export default Footer;