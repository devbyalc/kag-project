import { Divider } from "@mui/material";
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
    { nav: "CATEGORIES", hreof: "/recipes/category" },
    { nav: "ABOUT", href: "/about" },
  ];

  return (
        <Box
          sx={{
            display:'flex',
            flexDirection: "row",
            justifyContent:"space-between",
            m: 3,
            alignItems:'center',
          }}
        >
          <Box>LOGO</Box>
          <Navbar/>
        </Box>
  );
};

export default Header;
