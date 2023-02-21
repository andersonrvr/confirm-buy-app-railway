import { useUser } from "../../providers/user";
import { Container } from "./styles";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { ImCoinDollar } from "react-icons/im";
import ReactLoading from "react-loading";
import { useState } from "react";
const ConfirmBuy = () => {
  const { user, loadingBuy, bought, createSale } = useUser();
  const [buyerName, setBuyerName] = useState("");

  return (
    <Container>
      <header>
        <p>Vendedor: {user.name}</p>
      </header>
      <main>
        {" "}
        <div className="userInfos">
          <HiOutlineUser />
          <div className="userInfoName">
            {" "}
            <p className="infoTag">Nome do vendedor</p>
            <p>{user.name}</p>
          </div>
        </div>
        <div className="userInfos">
          <HiOutlineMail />
          <div className="userInfoName">
            {" "}
            <p className="infoTag">Email do vendedor</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="userInfos">
          <ImCoinDollar />
          <div className="userInfoName">
            {" "}
            <p className="infoTag">Valor</p>
            <p>R$100.00</p>
          </div>
        </div>
        {loadingBuy ? (
          <ReactLoading
            type={"spin"}
            color={"#3700b3"}
            height={"50px"}
            width={"50px"}
          />
        ) : bought ? (
          <div>
            <button onClick={() => window.location.reload()}>
              Compre novamente
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createSale({ buyer_name: buyerName, price: 100.0 });
            }}
          >
            <label htmlFor="buyer_name">Nome do comprador</label>
            <input
              onChange={(e) => setBuyerName(e.target.value)}
              type={"text"}
              name="buyer_name"
              required
            />
            <button type="submit">Confirmar compra</button>
          </form>
        )}
      </main>
    </Container>
  );
};

export default ConfirmBuy;
