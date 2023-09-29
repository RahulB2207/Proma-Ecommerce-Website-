
import { Grid, Typography,Box,styled,Button} from '@mui/material';
import { UseSelector, useSelector } from 'react-redux';
import CartItem from './CartItem';
import Totalbalance from './Totalbalance';
import Emptycart from './Emptycart';
import { Link } from 'react-router-dom';
const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('sm')]:{
        padding:'15px 0',
    }

}))
 
const Header = styled(Box)`
 padding:15px 24px;
 margin-top:20px;
 background:#fff;
 color:#002244;

`

const ButtonWrapper = styled(Box)`
  padding:16px 22px;
  background:#fff;
  box-shadow:0 -2px 10px 0 rgba(0 0 0 /10%);
  border-top:1px solid #f0f0f0;
  height:2rem;
`
const StyleButton = styled(Button)`
  dispay:flex;
  float:right;
  background:#ff9f00;
`
const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:'5px',
    [theme.breakpoints.down('sm')]:{
        marginBottom:'15px',
       
    }
}))
 



const Cart = () =>{
 const {cartItems} =  useSelector(state => state.cart);
 
    return(
        <>
        {
            cartItems.length ?
              <Container container >
                   <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                      <Header>
                        <Typography>My Cart({cartItems.length})</Typography>
                      </Header>
                      {
                        cartItems.map(item =>(
                          <CartItem item={item}/>
                        ))
                      }
                      <ButtonWrapper>
                        <Link to='https://buy.stripe.com/test_dR6dSj4HYfKp9ageUV'>
                         <StyleButton variant='contained'>Place order</StyleButton>
                         </Link>
                      </ButtonWrapper>
                   </LeftComponent>

                   <Grid item lg={3} md={3} sm={12} xs={12}>

                        <Totalbalance cartItems={cartItems}/>
                   </Grid>
              </Container>
              : <Emptycart/>
        }
        
        
        </>
    )
}

export default Cart;