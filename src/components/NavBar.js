import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import { PageContext } from '../Contexts/PageContext';

export default function NavBar() {
  const {page, setPage} = React.useContext(PageContext);  
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:"30"}} elevation={3}>
      <BottomNavigation value={page} onChange={handlePageChange}>
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Matches"
          value="matches"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}