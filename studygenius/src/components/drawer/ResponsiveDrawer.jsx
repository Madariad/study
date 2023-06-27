
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, RouterProvider, useNavigate, useParams } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CreatingContext } from '../../context';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import router from '../../routes/routes';
import { pathToRegexp } from 'path-to-regexp';

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

const drawerWidth = 240;

// const button = withRouter(({history})  => history.push('/teach/course/create'))



function ResponsiveDrawer(props) { 
    // const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
//   function yu() {
//     navigate('/teach/courses')
//   }
  // const [isCreating, setIsCreating] = React.useState(false)
  // React.useMemo(() => {
  //   console.log(isCreating)
  // }, [isCreating])

  const isCreating = JSON.parse(localStorage.getItem('isCreating'))
  let creatingName = JSON.parse(localStorage.getItem('creating-name'))
  const teachingCourseId = JSON.parse(localStorage.getItem('teachingCourseId'))

  setInterval(() => {
    creatingName = JSON.parse(localStorage.getItem('creating-name'))
  }, 500);

  const creatingNameFinished = React.useMemo(() => {
    return creatingName
  }, [creatingName])
  console.log(creatingNameFinished)

  const pattern = '/teach/courses(.*)'
  const regex = pathToRegexp(pattern)
  const match = regex.exec(router.state.location.pathname);
  console.log(match)

// accordion
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {!match ? 
           <div>
            <ListItem disablePadding>
        <ListItemButton onClick={e => localStorage.setItem('isCreating', false)}  components={NavLink} to={'/'}>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary={creatingNameFinished} />
        </ListItemButton>
      </ListItem>
             <ListItem disablePadding>
        <ListItemButton onClick={e => localStorage.setItem('isCreating', false)}  components={NavLink} to={'/'}>
              <ListItemIcon>
                <ArrowBackIcon/>
              </ListItemIcon>
              <ListItemText primary={'Назад'} />
        </ListItemButton>
      </ListItem>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Курс</Typography>
        </AccordionSummary>
        <AccordionDetails style={{paddingLeft: '40px'}}>
          <div>
            <a href="/courses/description">Описание</a>
          </div>
          <div>
            <a href={`/courses/${teachingCourseId}/syllabus`}>Содержание</a>
          </div>
          <div>
            <a href="/courses/check">Чек</a>
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
    </div>:
        <>
           <ListItem disablePadding>
        <ListItemButton  components={NavLink} to={'/'}>
              <ListItemIcon>
                <ArrowBackIcon/>
              </ListItemIcon>
              <ListItemText primary={'Назад'} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton  components={NavLink} to={'/teach/courses/create'}>
              <ListItemIcon>
                <PostAddIcon/>
              </ListItemIcon>
              <ListItemText primary={'Создать курс'} />
        </ListItemButton>
      </ListItem>
        <ListItem disablePadding>
        <ListItemButton  components={NavLink} to={'/teach/courses'}>
              <ListItemIcon>
                <PostAddIcon/>
              </ListItemIcon>
              <ListItemText primary={'Курсы'} />
        </ListItemButton>
      </ListItem>
        </>
        }
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Courses
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <RouterProvider router={props.router}/>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;