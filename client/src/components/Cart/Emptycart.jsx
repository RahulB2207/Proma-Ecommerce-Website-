
import { Typography ,Box,styled} from "@mui/material";
import emptyCart from "../../images/Empty.png";

const Component = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#fff',
    height:'65vh',
    width:'80%',
    margin:'120px 140px',
    [theme.breakpoints.down('md')]:{
        margin:'100px 70px',
       
      },
      [theme.breakpoints.down('sm')]:{
        margin:'100px 25px',
       
      }
}))
  
const Container = styled(Box)`
  text-align:center;
`
const Image = styled('img')(({theme})=>({
   height:'15rem',
   width:'auto',
   [theme.breakpoints.down('md')]:{
    height:'8rem',
   
  }
}))

const Emptycart = () =>{
    return(
        <Component>
            <Container>
            <Image src={emptyCart} />
            <Typography style={{fontSize:'1.2rem',color:'#7b7173'}}>Missing Cart Items!</Typography>
            </Container>
        </Component>
    )
}

export default Emptycart;