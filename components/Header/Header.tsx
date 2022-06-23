import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

interface Nav {
  nav: string;
  href: string;
}

const Header: React.FC = () => {
  const navs = [
    { nav: "HOME", href: "/" },
    { nav: "RECIPES", href: "/recipes" },
    { nav: "CATEGORIES", href: "/recipes/category" },
    { nav: "ABOUT", href: "/about" },
  ];

  return (
        <Box
          sx={{
            display:'flex',
            justifyContent:'space-between',
            flexDirection: "row",
            m: 5,
          }}
        >
          <Navbar/>
          <Box>LOGO</Box>
        </Box>
  );
};

export default Header;
