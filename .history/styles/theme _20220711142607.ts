import { createTheme } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
const outerTheme = createTheme({
  direction:"rtl",
  palette: {
    primary: {
      main: "#007bff"
    },
    secondary:{
        main:"#fff"
    }
  },
});
export default outerTheme
