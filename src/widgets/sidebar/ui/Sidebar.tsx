"use client";

import { useState } from "react";
import scss from "./Sidebar.module.scss";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${scss.sidebar} ${isOpen ? scss.opened : scss.closed}`}>
      <span onClick={() => setIsOpen(!isOpen)} className={scss.open}>
        {isOpen ? "<" : ">"}
      </span>

      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/products">Products</Link>
      <Link href="/admin/orders">Orders</Link>
      <Link href="/admin/form">Add Product</Link>
      <Link href="/admin/reviews">Reviews</Link>
    </div>
  );
};

export default Sidebar;
