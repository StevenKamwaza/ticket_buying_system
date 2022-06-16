
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './componets/home/Home';
import Categories from './componets/pages/Categories';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // sidebar menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        E-Ticket
      </Typography>
      <Divider />

      <List>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>Fixture</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            E-Ticket
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button sx={{ color: '#fff' }}>
                Home
            </Button>
            <Button sx={{ color: '#fff' }}>
                Fixtures
            </Button>
            <Button sx={{ color: '#fff' }}>
                About Us
            </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography weight={'bold'} variant={'h4'} align={'center'} bottomSpace={'medium'}>
          Buy Your ticket to watch the upcoming game!
        </Typography>
        <Home/>
        <Categories/>
      </Box>
    </Box>
  );
}


export default App;
