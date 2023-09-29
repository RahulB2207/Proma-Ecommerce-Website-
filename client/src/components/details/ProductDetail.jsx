import { Box,Table,TableBody,TableCell,TableRow,Typography,styled } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const SmallText = styled(Box)`
   font-size:14px;
    vertical-align:baseline;
   & > p{
    font-size:14px;
    margin-top:10px;
   }
`;

const Badge = styled(LocalOfferIcon)`
     color:#26a541;
    margin-right:10px;
    font-size:1rem;
`;
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;;
   & > td {
    font-size:14px;
    margin-top:10px;
   }
`;

const ProductDetail = ({product}) =>{
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
   return(
    <>
    <Typography style={{fontSize:'2rem',fontWeight:600}}>{product.title.longTitle}</Typography>

    <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>8 Ratings & 1 Reviews  </Typography>
    <Typography>
      <Box component="span" style={{fontSize:28}}>
      ₹{product.price.cost}
      </Box>&nbsp;&nbsp;&nbsp;

      <Box component="span" style={{color:'#878787'}}>
        <strike>₹{product.price.mrp}</strike>
      </Box>&nbsp;&nbsp;&nbsp;

      <Box component="span" style={{color:'#388E3C'}}>
        {product.price.discount} off
      </Box>&nbsp;&nbsp;&nbsp;
    </Typography>

    <Typography style={{marginTop:'10px'}}>Available offers</Typography>
    <SmallText>
        <Typography><Badge />Get Extra 20% off upto ₹50 on 1 item(s) <span style={{color:'#007FFF'}}>T&C</span></Typography>
        <Typography><Badge/>Get extra 13% off (price inclusive of discount) <span style={{color:'#007FFF'}}>T&C</span></Typography>
        <Typography><Badge/>Sign up for Proma pay Later and get Proma Gift Card worth ₹100 <span style={{color:'#007FFF'}}>Know more</span></Typography>
        <Typography><Badge/>5% Cashback on Proma Axis Bank card <span style={{color:'#007FFF'}}>T&C</span> </Typography>
        <Typography><Badge/>Buy 2 items save 5% Buy 3 more save 10% <span style={{color:'#007FFF'}}>T&C</span></Typography>
        <Typography><EventAvailableIcon style={{   color:'#26a541', marginRight:'10px', fontSize:'1rem'}}/>No cost EMI on BAJAJ Finserv EMI Card on cart value above ₹2999<span style={{color:'#007FFF'}}>T&C</span></Typography>
    </SmallText>
     <Table>
        <TableBody>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>{`Delivery by ${date.toDateString()} || ₹40`}</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                <TableCell>No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                <TableCell>
                  <Box  style={{color:'#2874f0',marginLeft:'27px'}} component="span">SuperComNet</Box>
                   <ul>
                      <li>GST invoice available</li>
                      <li>View More sellers Starting from ₹{product.price.cost} </li>
                   </ul>
                </TableCell>
            </ColumnText>

            <ColumnText>
                <TableCell colSpan={2}>
                  <img src={adURL} style={{width:'20rem'}} alt="proma points"></img>
                </TableCell>
            </ColumnText>

            <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell>{product.description}</TableCell>
            </ColumnText>
        </TableBody>
     </Table>
    </>
   )
}

export default ProductDetail;