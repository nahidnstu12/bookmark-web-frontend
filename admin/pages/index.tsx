import CommonButton from "../../@core/components/Button/CommonButton";
import { Box } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function Home() {
    const handleBtnClick=()=>{
        console.log('clicked')
    }

  return (
    <Box >
        <CommonButton  isLoading={true} >hello</CommonButton>
        <CommonButton   isLoading={false} onClick={handleBtnClick} className={"style"}  >click</CommonButton>
        <CommonButton endIcon={<AccountBalanceIcon />} variant={'contained'}  isLoading={false} >with icon</CommonButton>
        <CommonButton color={'info'} >hello</CommonButton>

    </Box>
  );
}
