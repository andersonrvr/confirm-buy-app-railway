import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingBuy, setLoadingBuy] = useState(false);
  const [bought, setBought] = useState(false);
  const getUserByLink = (link) => {
    setLoadingUser(true);
    api
      .get("/link/" + link)
      .then((res) => {
        setUser(res.data);
        setLoadingUser(false);
      })
      .catch((err) => {
        setLoadingUser(false);
      });
  };

  const createSale = (data) => {
    setLoadingBuy(true);
    api
      .post("/sales/" + user.seller_link, data)
      .then((res) => {
        setLoadingBuy(false);
        setBought(true);
        toast.success("Compra realizada com sucesso");
        return res.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoadingBuy(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        getUserByLink,
        user,
        createSale,
        loadingUser,
        loadingBuy,
        bought,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
