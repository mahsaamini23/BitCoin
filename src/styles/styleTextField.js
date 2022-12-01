import {styled} from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({theme})=>({
    height:44,
    '& .MuiTextField-root':{
        color:'grey',
    },
    '& .MuiOutlinedInput-root': {
        width: 240,
        height: 40,
        color:'grey',
        
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: '#808080',
        },
        '&.Mui-focused fieldset': {
            borderSize:'.1px',
            borderColor: '#808080',
        },
    },
       
}
))

export default StyledTextField;