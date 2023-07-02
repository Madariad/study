import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, RouterProvider, useNavigate, useParams } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';


 

export default function ControlledTreeView() {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  const [expanded, setExpanded] = React.useState('');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: '#fff',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
  
  return (
    <Box sx={{width: '200px'}}>
    <ListItem disablePadding>
    {/* <img src={courseList == [] && courseList[0].course_image !== null ? `http://localhost:5000/api/v1/course/img/${courseList[0].course_image}` : "https://placehold.co/600x400/EEE/31343C"} width={150} style={{border: '1px solid', margin: 'auto'}}/> */}
    </ListItem>
    <ListItem disablePadding>
    <p style={{ margin: 'auto'}}>ddd</p>
    </ListItem>


<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  <Typography>Курс</Typography>
</AccordionSummary>
<AccordionDetails style={{paddingLeft: '40px'}}>
  <div >
    <a style={{border: '1px solid', padding: '10px', display: 'block'}} >Описание</a>
  </div>
  <div >
    <a style={{border: '1px solid', padding: '10px', display: 'block'}} >Содержание</a>
  </div>
  <div>
    <a style={{border: '1px solid', padding: '10px', display: 'block'}} >Чек</a>
  </div>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
  <Typography>Collapsible Group Item #2</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
  <Typography>Collapsible Group Item #3</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
</Box>
  );
}