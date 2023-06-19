import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import InputSearch from "./components/inputSearch/index";

import Tab from "./components/tab/index";
import Subject from "./components/subject/index"




const usStyles = makeStyles((theme) => ({
  search: {
      width: '100%',
      height: '100px',
      backgroundColor: theme.palette.tableColor.main,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 20
    },
    tab: {
      marginTop: 60
    },
    subject: {
      marginTop: 60

    }
  }));
function catalog() {
   
    const classes = usStyles();

    return (
        <>
            <div className={classes.search}>
              <InputSearch />
            </div>
            <div className={classes.tab}>
               <Tab />
            </div>
            {/* <div className={classes.subject}>
              <Subject />
            </div> */}
        </>
    )
}
export default catalog;