import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Stack,
    Button
  } from "@mui/material";
  import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
  import { useNavigate } from "react-router-dom";
  
  const MuiNavbar = () => {
    // let navigate = useNavigate();
  
    //   const handler = () => {
    //     navigate('/dashboard')
    // }
  
    return (
      <AppBar position="static" style={{ backgroundColor: "rgb(120, 170, 200)" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            <CatchingPokemonIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={2}>
                <Button color="inherit" href="/">
                  Reg-App
                </Button>
                <Button color="inherit" href="/dashboard">
                  Dashboard
                </Button>
                <Button color="inherit" href="/products">
                  Products
                </Button>
                <Button color="inherit" href="/posts">
                  Posts
                </Button>
                <Button color="inherit" href="/users">
                  Users
                </Button>
                <Button color="inherit" href="/todos">
                  TO-DO
                </Button>
              </Stack>
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default MuiNavbar;
  