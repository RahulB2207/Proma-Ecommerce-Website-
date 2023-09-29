import react, { useState,useEffect } from 'react';
import { InputBase,Box,styled, List ,ListItem} from '@mui/material';
import "../../Css/Header/Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useSelector,useDispatch} from'react-redux';
import { getProducts } from '../../redux/actions/productsAction';
import { Link } from 'react-router-dom';

const ListWrapper = styled(List)`
   position:absolute;
   top:3.8rem;
  background:#FFFFFF;
  color:black;
  
`


const Search = () =>{
    const[text,setText] = useState('');

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(getProducts());

    },[dispatch])

    const getText = (text) =>{
        setText(text);
    }
    


    return(
    <Box className='Header_inputField'>
          <InputBase placeholder='Search for Products,Brands and More' className='Header_inputField'
           onChange={(e)=>getText(e.target.value)}
           value={text}
          />
          <Box className="search_ICon_box">
          <SearchOutlinedIcon className='search_ICon'/>
          </Box>
          {
            text && <ListWrapper>
                       {
                        products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                            <ListItem>
                                <Link style={{textDecoration:'none',color:'inherit'}}
                                 to={`/product/${product.id}`}
                                onClick={()=>setText('')}
                                 >
                                {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                       }
                   </ListWrapper>
          }
    </Box>
     
    )
}

export default Search;