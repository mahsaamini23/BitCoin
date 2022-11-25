import {styled} from "@mui/material";
import Button from "@mui/material/Button";


const StyledButton = styled(Button)(({theme})=>({
    // color:'grey',
    // backgroundColor:'#f2f2f2',
    color:'white',
    backgroundColor:'#4285F2',
    '&:hover': {
        backgroundColor: '#4285f2',
        color: 'withe',
        opacity: '.8'
    },
    
}))

export default StyledButton;