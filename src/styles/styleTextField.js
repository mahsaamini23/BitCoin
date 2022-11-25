import {styled} from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({theme})=>({
    height:44,
    '& .MuiTextField-root':{
        color:'grey',
    },
    '& .MuiOutlinedInput-root': {
        width: 220,
        height: 40,
        color:'grey',
        
        '& fieldset': {
            borderColor: 'grey',
        },
    },
    '&.Mui-focused fieldset': {
        border: '1px solid black',
        borderColor:'grey',
    },    
}
))

export default StyledTextField;