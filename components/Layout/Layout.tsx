import React from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:container md:mx-auto">
      <AppBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
