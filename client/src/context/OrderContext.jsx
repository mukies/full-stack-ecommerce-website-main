import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

// eslint-disable-next-line react/prop-types
const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);
  const o = JSON.parse(sessionStorage.getItem("order"));

  useEffect(() => {
    if (o) {
      setOrder(o);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

const useOrder = () => useContext(OrderContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useOrder, OrderProvider };
