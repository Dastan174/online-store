import React from "react";
import scss from "./orders.module.scss";
import OrderRow from "../../../entities/orderRow/ui/OrderRow";

export default function Orders() {
  const orders = [
    {
      id: "1",
      customerName: "Азамат",
      phone: "+996 555 123 456",
      productTitle: "Шифер",
      status: "new",
    },
    {
      id: "2",
      customerName: "Ербол",
      phone: "+996 777 987 654",
      productTitle: "Шифер 23",
      status: "processing",
    },
    {
      id: "3",
      customerName: "Айжан",
      phone: "+996 709 111 222",
      productTitle: "Шифер Pro",
      status: "ready",
    },
  ];

  return (
    <section className={scss.wrapper}>
      <div className={scss.topBar}>
        <h2 className={scss.title}>Заказы</h2>
        <button>Фильтр</button>
      </div>

      <table className={scss.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Товар</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
