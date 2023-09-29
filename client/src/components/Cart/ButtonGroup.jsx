import { Button,ButtonGroup,styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-Top:30px;
`
const StyleButton = styled(Button)`
   border-radius:50%;
   margin-top:10px;
`

const GroupedButton = () =>{
   return(
    <ButtonGroup>
        <StyleButton variant="outlined">-</StyleButton>
        <StyleButton variant="outlined" disabled>1</StyleButton>
        <StyleButton variant="outlined">+</StyleButton>
    </ButtonGroup>
   )
}

export default GroupedButton;