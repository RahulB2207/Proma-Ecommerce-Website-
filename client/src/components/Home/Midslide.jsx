
import Slide from "./Slide";
import { Box,styled } from "@mui/material";

const LeftComponent = styled(Box) (({theme})=>({
    width:'85%',
    [theme.breakpoints.down('md')]: {
        width:'100%',
    }

}));

const RightComponent = styled(Box)(({theme})=>({
    width:'15%',
    padding:'0.4rem',
    margin:'0.1rem',
    backgroundColor:'white',
    [theme.breakpoints.down('md')]: {
        display:'none'
    }
}));

const Midslide = ({products,title,timer}) =>{
    return(
        <Box style={{ display:'flex',alignItems:'center'}}>

            <LeftComponent>
            <Slide products={products} title={title} timer={timer}/>
            </LeftComponent>

            <RightComponent>
               <img src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' alt='ad' style={{width:'auto',height:'20.5rem',textAlign:'center'}}></img>
            </RightComponent>

        </Box>
        
    )
}

export default Midslide;