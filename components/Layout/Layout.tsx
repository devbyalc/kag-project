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
      <div className="divider mt-0"></div>
      {children}
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default Layout;
