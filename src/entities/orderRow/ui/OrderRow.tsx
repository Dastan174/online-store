import React from "react";
import scss from "./orderRow.module.scss";

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  productTitle: string;
  status: "new" | "processing" | "ready" | string;
  createdAt?: string;
}

interface OrderRowProps {
  order: Order;
}


const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    <tr className={scss.row}>
      <td>{order.customerName}</td>
      <td>{order.phone}</td>
      <td>{order.productTitle}</td>

      <td>
        <span className={`${scss.status} ${scss[`status--${order.status}`]}`}>
          {order.status === "new" && "Новый"}
          {order.status === "processing" && "В обработке"}
          {order.status === "ready" && "Готов"}

          {!["new", "processing", "ready"].includes(order.status) &&
            order.status}
        </span>
      </td>

      <td>
        <button className={scss.actionBtn}>Изменить статус</button>
      </td>
    </tr>
  );
};

export default OrderRow;
