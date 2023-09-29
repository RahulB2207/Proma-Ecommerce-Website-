import { Box, Button,styled } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useNavigate,Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from "react";

const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding:'40px 0 0 80px',
  [theme.breakpoints.down('lg')]:{
    padding:'20xp 40px'
  }
}));
 

const Image = styled('img')({
    padding:'15px',
})
const StyleButton = styled(Button)(({theme}) =>({
  width:'46%',
  height:'40px',
  borderRadius:'0.5rem',
  marginLeft:'4%',
  marginTop:'1rem',
  [theme.breakpoints.down('lg')]:{
    width:'46%',
    fontSize:'0.8rem'

  },
  [theme.breakpoints.down('sm')]:{
    width:'48%',

  }
}))
  


const ActionItem = ({product}) =>{

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const[quantity,setQuantity] = useState(1);


 const {id} = product;

  const addItemToCart = () =>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }
    return(
      <LeftContainer>
        <Box style={{ padding:'15px 20px',
    border:'1px solid #f0f0f0',  width:'90%'}}>
          <Image src={product.detailUrl} alt='product'/>
        </Box>
        
      
        <StyleButton variant="contained" style={{backgroundColor:'#ff9f00',fontWeight:600}} onClick={addItemToCart}> <AddShoppingCartIcon style={{marginRight:'4px'}}/> Add to Cart</StyleButton>
       
       <Link to='https://buy.stripe.com/test_dR6dSj4HYfKp9ageUV'>
        <StyleButton variant="contained"  style={{backgroundColor:'#fb541b',fontWeight:600,}}><ElectricBoltIcon style={{marginRight:'4px'}}/> Buy Now</StyleButton>
        </Link>
      </LeftContainer>

    )  
}

export default ActionItem;