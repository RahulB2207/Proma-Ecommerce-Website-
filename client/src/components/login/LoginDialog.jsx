import { Dialog ,Box,TextField, Typography,Button,styled} from '@mui/material';
import React from 'react';
import { useState,useContext } from 'react';
import "../../Css/Home/loginDialog.css";
import logo from "../../images/E_logo.png";
import { authenticateSignup } from '../../Service/Api';
import { DataContext } from '../../Context/DataProvider';
import { authenticateLogin } from '../../Service/Api';



const LeftPart = styled(Box)`
    display: flex;
    flex-direction: column;
     width:55vh;
    padding:1rem;
    text-align: center;
    flex: 1;
`







const accountInitialValues = {
    login:{
        view:'login',
        heading:"Sign-In",
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}
const signupIntitialvalues = {
     firstname:'',
     lastname:'',
     username:'',
     email:'',
     phone:'',
     password:''
}

const loginInitialValues = {
    username:'',
    password:''
}

const LoginDialog = ({open,setOpen}) =>{
 const[account,toggleAccount] = useState(accountInitialValues.login)
 const{setAccount} = useContext(DataContext);
 const[login, setLogin] = useState(loginInitialValues);
 const[error,setError] = useState(false);

const toggleSignup = () =>{
    toggleAccount(accountInitialValues.signup);
}

const[signup, setSignup] = useState(signupIntitialvalues)
const onInputChange = (event) =>{
   setSignup({...signup,[event.target.name]:event.target.value});
   console.log(signup);
}

const signUpUser = async() => {
    try{
       const response =   await authenticateSignup(signup);
       if(!response) {
        return
       }
       handleClose();
       setAccount(signup.firstname);
    }catch(error){
        console.log(error);
    }
}

const onValueChange = (e) =>{
    setLogin({...login,[e.target.name]:e.target.value});
}

const loginUser = async () =>{
    try{
     let response =  await  authenticateLogin(login);
     if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname);
     }else{
        setError(true);
     }
    }catch(error){
        console.log(error);
    }
}



    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    return(
       <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
         <Box className='Dialog_Container' >

            <Box className="Right_part">
                <Box>
                     <h1 style={{marginLeft:'10px'}}>{account.heading}</h1>
                     <Typography style={{marginLeft:'10px'}}>{account.subHeading}</Typography>
                </Box>
                <Box>
                    <img src={logo} className='login_logo'></img>
                </Box>
                
            </Box>
             {
             account.view === 'login' ?
            <Box  style={{ display: 'flex',
            flexDirection: 'column',
             width:'55vh',
             padding:'1rem',
            textAlign: 'center',
            flex: 1}}>
               <TextField variant='standard' label='Enter Username'  onChange={(e)=> onValueChange(e)} name='username' className='login_username'/>
            
               <TextField variant='standard' label='Enter Password' onChange={(e)=> onValueChange(e)} name='password' className='login_password'/>
                { error && <Typography style={{fontSize:'0.8rem', color:'red',marginTop:'10px',fontWeight:'600'}}>please enter valid username or password!</Typography>
                }
               <Typography className="privacy_policy">By continuing you agree all the Terms of use and Privacy Policy.</Typography>

               <Button className='button1' variant="contained" onClick={loginUser}>Sign-In</Button>

               <Typography className='or'>OR</Typography>
               <Button className='button2' variant="outlined">Request OTP </Button>
               <Typography className='create_account' onClick={toggleSignup}>New to Proma? <span>Create an account</span></Typography>
            </Box>
          :
          <Box  style={{ display: 'flex',
                        flexDirection: 'column',
                         width:'55vh',
                         padding:'1rem',
                        textAlign: 'center',
                        flex: 1}}>
          <TextField variant='standard' label='Enter First Name' className='login_username' onChange={onInputChange} name='firstname'/>
          <TextField variant='standard' label='Enter LastName' className='login_password' onChange={onInputChange} name='lastname' />
          <TextField variant='standard' label='Enter UserName' className='login_password' onChange={onInputChange} name='username'/>
          <TextField variant='standard' label='Enter Email' className='login_password' onChange={onInputChange} name='email'/>
          <TextField variant='standard' label='Enter Phone Number' className='login_password' onChange={onInputChange} name='phone'/>
          <TextField variant='standard' label='Enter Password' className='login_password' onChange={onInputChange} name='password'/>
         
        
          <Button className='button1' variant="contained" onClick={signUpUser}>Continue</Button>
         
       </Box>
}
         </Box>
       </Dialog>
    )
}

export default LoginDialog;