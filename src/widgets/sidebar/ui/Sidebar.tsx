"use client";

import { useState } from "react";
import scss from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${scss.sidebar} ${isOpen ? scss.opened : scss.closed}`}>
      <span onClick={() => setIsOpen(!isOpen)} className={scss.open}>
        {isOpen ? "<" : ">"}
      </span>

      <a href="/">Dashboard</a>
      <a href="/">Products</a>
      <a href="/">Orders</a>
      <a href="/">Users</a>
      <a href="/">Reviews</a>
    </div>
  );
};

export default Sidebar;
