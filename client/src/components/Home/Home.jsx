
import { useEffect } from 'react';
import "../../Css/Home/home.css";
import Navbar from './Navrbar';
import { Box } from '@mui/material';
import Banner from './Banner';
import Slide from './Slide';
import Midslide from './Midslide';

import { getProducts } from '../../redux/actions/productsAction';
import { useDispatch,useSelector } from 'react-redux';

const Home = () =>{

 const {products} = useSelector(state => state.getProducts)
 console.log(products);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch])
    return(
      <Box className='home'>
            <Navbar/>
            <Banner/>
           
            <Midslide products={products} title="Deals of the day" timer={true}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
      </Box>
        
    )
}

export default Home;