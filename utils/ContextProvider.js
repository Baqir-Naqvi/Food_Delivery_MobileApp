import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ContextProvider = ({ children }) => {
  const [restaurantlist, setRestaurantlist] = useState([]);
  const [menulist, setMenulist] = useState([]);
  const [cartitems, setCartitems] = useState([]);
  const [update, setUpdate] = useState(false);
  const[price,setPrice]=useState(0);
  const handleupdate=()=>{
    setUpdate(!update);
  }

  return (
    <ModalContext.Provider
      value={{
       restaurantlist, 
       setRestaurantlist,
       menulist, setMenulist,
        cartitems, setCartitems,
        handleupdate,
        price,setPrice
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ContextProvider;
