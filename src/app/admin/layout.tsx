"use client";
import { useState } from "react";
import Sidebar from "../../widgets/sidebar/ui/Sidebar";
import scss from "./layout.module.scss";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={scss.layout}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={isOpen ? scss.mainOpen : scss.mainClosed}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
