import { Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useEffect } from "react";

interface Nav {
  nav: string;
  href: string;
}

const Navbar: React.FC = () => {
  const maxWidthMobile = 767;
  const navs = [
    { nav: "HOME", href: "/" },
    { nav: "RECIPES", href: "/recipes" },
    { nav: "CATEGORIES", href: "/recipes/category" },
    { nav: "ABOUT", href: "/about" },
  ];

  // Get window width and height 
  const [width, detectW] = React.useState(maxWidthMobile)

  // Handle Navigation Menu Mobile
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('resize',()=> {detectW(window.innerWidth)})
    return () => {
      window.removeEventListener('resize', ()=> {detectW(window.innerWidth)})
    }
  }, [width])

 

  const mobileNav = () => (
    <>
    <IconButton
      aria-label="navigation menu"
      aria-controls={open ? "nav-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      sx={{ color: "primary.dark"}}
    >
      <MenuIcon />
    </IconButton>
     <Menu
     id="nav-menu"
     anchorEl={anchorEl}
     open={open}
     onClose={handleClose}
     MenuListProps={{
       'aria-labelledby': 'basic-button',
     }}
   >
     {navs.map((nav: Nav) => (
      <MenuItem onClick={handleClose} sx={{ color: "primary.dark"}}>
        <Link href={nav.href}>
          <a className={styles.links}>
            <Typography variant="subtitle1" display="inline">
              {nav.nav}
            </Typography>
          </a>
        </Link>
        </MenuItem>
      ))}
   </Menu>
   </>
  );

  const webNav = () => (
    <Box
      sx={{
        flexDirection: "row",
        color: "primary.dark",
      }}
    >
      {navs.map((nav: Nav) => (
        <Link href={nav.href}>
          <a className={styles.links}>
            <Typography variant="body1" display="inline">
              {nav.nav}
            </Typography>
          </a>
        </Link>
      ))}
    </Box>
  );

  return (
    <nav>
      {width>maxWidthMobile ? webNav() : mobileNav()}
    </nav>
  );
};

export default Navbar;
