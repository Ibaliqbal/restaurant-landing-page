import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const sumQuantity = order.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  useEffect(() => {
    setTotalQuantity(sumQuantity);
  }, [order]);

  const handleAddToCart = (menu) => {
    const orderMenu = {
      id: menu.id,
      quantity: 1,
    };
    setTotalQuantity((prev) => prev + 1);
    const findMenuSame = order.find((list) => list.id === orderMenu.id);
    const addOrder = [...order, orderMenu];
    if (findMenuSame) {
      findMenuSame.quantity++;
    } else {
      setOrder(addOrder);
    }
  };

  const handleTambahQuantity = (list) => {
    setTotalQuantity((prev) => prev + 1);
    const findMenuSame = order.find((ord) => ord.id === list.id);
    if (findMenuSame) {
      findMenuSame.quantity++;
    }
  };
  const handleKurangQuantity = (list) => {
    const findMenuSame = order.find((ord) => ord.id === list.id);
    const filterOrder = order.filter((ord) => ord.id !== list.id);
    setTotalQuantity((prev) => prev - 1);
    if (findMenuSame) {
      if (findMenuSame.quantity === 1) {
        setOrder(filterOrder);
      } else {
        findMenuSame.quantity--;
      }
    }
  };

  const handleDeleteMenu = ({ id }) => {
    const filterOrder = order.filter((ord) => ord.id !== id);
    setOrder(filterOrder);
    // const sumQuantityDelete = order.reduce((acc, item) => {
    //   return acc + item.quantity;
    // }, 0);
    // console.log(sumQuantityDelete)
    // setTotalQuantity(sumQuantityDelete);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        handleAddToCart,
        totalQuantity,
        handleTambahQuantity,
        handleKurangQuantity,
        handleDeleteMenu,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
