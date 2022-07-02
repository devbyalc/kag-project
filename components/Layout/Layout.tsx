import {Grid, Divider, Container} from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
    <Grid container direction="column">
      <Grid  item>
        <Header />
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
    </Container>
  );
};

export default Layout;
