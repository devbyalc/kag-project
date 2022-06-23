import { Container } from "@mui/material";
import React from "react";
import Header from "../Header/Header";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <Container>

        <Header/>
        <section>
        {children}
        </section>
        <footer>
        <p>footer</p>
        </footer>
      </Container>
    )
    
};

export default Layout;
