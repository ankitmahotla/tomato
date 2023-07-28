import React, { createContext, useState } from "react";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Ram",
      dishes: "Burger, Pizza, Pasta, Fries",
      mobile: "9918374638",
      status: false,
      tableId: 1,
    },
    {
      id: 2,
      name: "Ram",
      dishes: "Burger, Pizza, Pasta, Fries",
      mobile: "9918374638",
      status: true,
      tableId: 2,
    },
  ]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const removeOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };
  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
