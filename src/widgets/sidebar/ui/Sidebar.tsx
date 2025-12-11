"use client";
import scss from "./Sidebar.module.scss";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${scss.sidebar} ${isOpen ? scss.opened : scss.closed}`}>
      <span className={scss.openButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : ">"}
      </span>

      <a href="/admin/dashboard">Dashboard</a>
      <a href="/admin/productForm">Products</a>
      <a href="/admin/orders">Orders</a>
      <a href="/admin/users">Users</a>
      <a href="/admin/reviews">Reviews</a>
      <a href="/" className={scss.backHome}>
        Back to home
      </a>
    </div>
  );
};

export default Sidebar;
