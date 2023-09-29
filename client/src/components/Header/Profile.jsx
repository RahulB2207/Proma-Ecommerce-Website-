import { Typography,Box, Menu, MenuItem ,styled} from "@mui/material"
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Component  = styled(Menu)`
 margin-top:7px;
`

const Profile = ({account,setAccount}) =>{

    const[open,setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const logoutUser = () =>{
        setAccount('');
    }

    return(
         <>
        <Box onClick={handleClick}>
        <Typography>{account}</Typography>
        </Box>
        <Component 
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
           <MenuItem onClick={() => {handleClose(); logoutUser();}}>
             <LogoutIcon color="primary"  style={{paddingRight:'10px',fontSize:'1.3rem'}}/>
            <Typography>Log Out</Typography>
           </MenuItem>
        </Component>
         </>
    )
}

export default Profile;
