import Sidebar from "../../widgets/sidebar/ui/Sidebar";
import scss from "./layout.module.scss";

const layout = ({ children }) => {
  return (
    <div className={scss.layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
