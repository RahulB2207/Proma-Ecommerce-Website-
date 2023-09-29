import { Box, Typography,styled,Button } from "@mui/material";
import logo from "../../images/E_logo.png";
import { addEllipsis } from "../../utils/common_utils";
import ButtonGroup from "./ButtonGroup";
import { RemoveFromCart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)(({theme})=>({
    borderTop:'1px solid #f0f0f0',
    display:'flex',
    background:'#fff',
    padding:'20px',
    [theme.breakpoints.down('sm')]:{
        padding:'0'
     }
}))
   


const LeftComponent = styled(Box)`
  margin:20px;
  display:flex;
  flex-direction:column;
`

const SmallText = styled(Typography)`
  color:#878787;
  font-size:14px;
  margin-top:10px;
`
const Remove = styled(Button)(({theme})=>({
  color:'white',
   marginTop:'20px',
   backgroundColor:'#fb541b',
   [theme.breakpoints.down('sm')]:{
      width:'9rem',
      height:'40px',
      fontSize:'0.7rem',
   }
}))
   




const CartItem = ({item}) =>{

    const dispatch = useDispatch();

    const RemoveItem = (id) =>{
        dispatch(RemoveFromCart(id));
    }
   return(
    <Component>
        <LeftComponent>
             <img src={item.url} alt='product Image' style={{height:110,width:110}}/>
             <ButtonGroup/>
        </LeftComponent>
        <Box styled={{margin:'20px'}}>
             <Typography>{addEllipsis(item.title.longTitle)}</Typography>
             <SmallText>Seller:RetailNet </SmallText>
             <Typography style={{marginTop:'20px 0'}}>
                    <Box component="span" style={{fontSize:21,fontWeight:600}}>
                      ₹{item.price.cost}
                   </Box>&nbsp;&nbsp;&nbsp;

                     <Box component="span" style={{color:'#878787'}}>
                      <strike>₹{item.price.mrp}</strike>
                     </Box>&nbsp;&nbsp;&nbsp;

                    <Box component="span" style={{color:'#388E3C'}}>
                     {item.price.discount}off
                    </Box>&nbsp;&nbsp;&nbsp;
              </Typography>
              <Remove variant='contained' onClick={()=>RemoveItem(item.id)}>Remove From Cart</Remove>
        </Box>

    </Component>
   )
}

export default CartItem;