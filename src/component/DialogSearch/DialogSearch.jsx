import react , {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';



const DialogSearch =({open, setOpen, coins, selectFees, setSelectFees, setTextField})=>{
    const [searchFees, setSearchFees] = useState('')

    const handleClose=()=>{
        setOpen(false)
    }

    const handleSearchFees =(e)=>{
        setSearchFees(e.target.value)
    }

    const handleSelectFees =(id)=>{
        setTextField({Toman:'', name:''})
        setSelectFees(coins.filter(coin => coin.id === id))
        setTextField({Toman:selectFees[0].current_price, name:selectFees[0].name})
        setOpen(false)
    }

   
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>انتخاب ارز</DialogTitle>
            <DialogContent>
                <Grid container item >
                    
                    <TextField sx={{width:'100%', height:'35px'}} id="search" onChange={handleSearchFees} size="small"
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position='start'>
                                <SearchIcon/>
                            </InputAdornment>
                        ) 
                    }}
                    variant='outlined'
                    />
                </Grid>
                <TableContainer  mt={6}>
                    <Table sx={{width:'400px', height:'550px'}}>
                        <TableBody>
                            {coins.filter(coin => searchFees === '' ? coin : coin.name.toLowerCase().includes(searchFees.toLowerCase()))
                            .map((coin) => (
                                <TableRow  key={coin.id} sx={{width:'380px',height:'60px',display:'flex', justifyContent:'space-between'}} onClick={()=>handleSelectFees(coin.id)}>
                                    <TableCell align='right' sx={{width:'50%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px', cursor:'pointer'}}>{coin.name}<img src={coin.image} alt="logo" style={{width:'25px', height:'25px'}}/></TableCell>
                                    <TableCell align='right' sx={{width:'50%', display:'flex', flexDirection:'column',alignItems:'center', gap:'10px'}}>
                                        <Grid>
                                            <Typography>قیمت خرید</Typography>
                                            <Typography>{coin.current_price}</Typography>
                                        </Grid>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
        </Dialog>
    )
}

export default DialogSearch;