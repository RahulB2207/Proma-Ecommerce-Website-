import react from 'react';
import './App.css';
//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
const App = () =>{
  return(
  <DataProvider>
  <BrowserRouter>
     <Header/>
        <Box style = {{marginTop:'5rem'}}>
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      <Footer/>
  </BrowserRouter>
  </DataProvider>
  
   
  )
};

export default App;