import React from 'react';
import "../../Css/Home/Banner.css";
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';


const Image = styled('img')(({theme})=>({
  width:'100%',
  height:'300px',
  margin:'0.5rem 0',
  [theme.breakpoints.down('md')]:{
     objectFit:'cover',
     height:180
  }
}))
 


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner = () =>{
    return(
       <Carousel className='Carousel'
       responsive = {responsive}
       draggable={false}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
       showDots={false}
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={2000}
       keyBoardControl={true}
       slidesToSlide={1}
       >
        {
            bannerData.map(data =>(
                <Image src={data.url} alt="banner" className='banner_image'/>
            ))
        }

       </Carousel>
    )
};

export default Banner;