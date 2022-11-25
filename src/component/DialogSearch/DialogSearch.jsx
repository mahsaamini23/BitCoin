import react , {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Input from "@mui/material/Input";
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
        setTextField({Toman:'', unite:'', name:''})
        setSelectFees(coins.filter(coin => coin.id === id))
        setTextField({Toman:selectFees[0].current_price, unite:1, name:selectFees[0].name})
    }

   
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>انتخاب ارز</DialogTitle>
            <DialogContent>
                <Grid container item sx={{display:'flex',alignItems:'center',gap:'10px',border:'1px solid #e0e0e0', borderRadius:'20px' }}>
                    <SearchIcon sx={{fontSize:25, padding:'0 5px'}}/> 
                    <Input sx={{width:'85%', height:'40px'}} type='search' onChange={handleSearchFees}/>
                </Grid>
                <TableContainer >
                    <Table sx={{width:'400px', height:'550px'}}>
                        <TableBody>
                            {coins.filter(coin => searchFees === '' ? coin : coin.name.toLowerCase().includes(searchFees.toLowerCase()))
                            .map((coin) => (
                                <TableRow  key={coin.id} sx={{width:'380px',height:'60px',display:'flex', justifyContent:'space-between'}} onClick={()=>handleSelectFees(coin.id)}>
                                    <TableCell align='right' sx={{width:'50%', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'10px'}}>{coin.name}<img src={coin.image} alt="logo" style={{width:'25px', height:'25px'}}/></TableCell>
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