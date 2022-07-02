import {Grid, Divider, Container} from "@mui/material";
import React from "react";
import ResponsiveAppBar from "../AppBar/ResponsiveAppBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container direction="column">
      <Grid  item>
        <ResponsiveAppBar/>
      </Grid>
      <Grid item>
          <Divider variant="middle" sx={{backgroundColor:"primary.light"}}/>
        </Grid>
      <Grid item>
      {children}
      </Grid>
      <Grid item>
          <Divider variant="middle" sx={{backgroundColor:"primary.light"}}/>
        </Grid>
      <Grid item>
          <Footer/>
      </Grid>
    </Grid>
  );
};

export default Layout;
