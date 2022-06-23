import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import styles from "./Footer.module.css";

interface Nav {
  nav: string;
  href: string;
}

const Footer: React.FC = () => {
  const navs = [
    { nav: "HOME", href: "/" },
    { nav: "RECIPES", href: "/recipes" },
    { nav: "CATEGORIES", href: "/recipes/category" },
    { nav: "ABOUT", href: "/about" },
  ];

  return (
      <nav>
        <Box
          sx={{
            fontWeight: "bold",
            flexDirection: "row",
            m: 2,
            color: "primary.dark",
          }}
        >
          {navs.map((nav: Nav) => (
            <Link href={nav.href}>
              <a className={styles.links}>{nav.nav}</a>
            </Link>
          ))}
        </Box>
      </nav>
  );
};

export default Footer;
