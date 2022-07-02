import { Grid } from "@mui/material";
import styles from "./Footer.module.css";



const Footer: React.FC = () => {

  return (
      <footer>
        <Grid container sx={{p:1, justifyContent:'space-evenly'}}>
        COPYRIGHT © 2022 · ALL RIGHTS RESERVED · WokAWish
        </Grid>
      </footer>
  );
};

export default Footer;
