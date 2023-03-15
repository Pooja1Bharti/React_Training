import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/FavoriteOutlined";
import LocationOnIcon from "@mui/icons-material/LocationCity";

const BottomNav = () => {
  return (
    <BottomNavigation
      showLabels
      style={{ backgroundColor: "rgb(120, 170, 200" }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
