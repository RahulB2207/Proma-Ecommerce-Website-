import Carousel from "react-multi-carousel";
import styled from "@emotion/styled";
import 'react-multi-carousel/lib/styles.css';
import { Box,Button,Typography } from "@mui/material";
import "../../Css/Home/home.css";
import Countdown from 'react-countdown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MidSlide from "./Midslide";
import { Link } from "react-router-dom";

const Image = styled('img')`
   height:10rem;
   width:auto;
   margin-top:0.2rem;
`
const Text =styled(Typography)`
   font-size:14px;
   margin-top:1px;
`


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = ({products,title,timer}) =>{
    const renderer = ({hours,minutes,seconds}) =>{
       return <Box varient="span" style={{color:'#878787'}}>
        {hours}:{minutes}:{seconds} <span>Left</span>
       </Box>
    }
   return(
 <Box className="carousel_component" style={{marginTop:'0.5rem'}}>
    
    <Box className="carousel_heading_part">
    <Typography className="carousel_heading" style={{fontSize:'1.5rem',lineHeight:'1.2rem',fontWeight:'600'}}>
      {title}
     </Typography>
     { timer && 
     <Box style={{display:'flex'}}>
          <AccessTimeIcon style={{marginRight:'5px', color:'green'}}/>
          <Countdown date={Date.now()+ 5.04e+7} renderer={renderer}/>
       </Box>
      }
     <Button variant="contained"  style={{marginLeft:'auto',marginBottom:'5px',background:'#002244'}}>View All</Button>
    </Box>
    <Carousel className="carousel"
      responsive={responsive}
      swipeable={false}
      draggable={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      showDots={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
    >
     {
        products.map(product =>(
        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
            <Box textAlign='center'>
               <Image src={product.url} alt='product'/>
               <Text style={{fontWeight:'600',color:'#002244'}}>{product.title.shortTitle}</Text>
               <Text style={{color:'green'}}>{product.discount}</Text>
               <Text style={{color:'#878787'}}>{product.tagline}</Text>
            </Box>
       </Link>
            
        ))
     }

    </Carousel>
    </Box>

   )
}
export default Slide;