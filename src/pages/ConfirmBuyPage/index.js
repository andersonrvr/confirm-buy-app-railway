import { useParams } from "react-router-dom";
import { useUser } from "../../providers/user";
import { Container } from "./styles";
import { useEffect } from "react";
import MessageWithoutLink from "../../components/MessageWithouLink";
import ConfirmBuy from "../../components/ConfirmBuy";

const ConfirmBuyPage = () => {
  const { seller_link } = useParams();
  const { user, getUserByLink, loadingUser } = useUser();
  useEffect(() => {
    getUserByLink(seller_link);
  }, []);

  return (
    <Container>
      {loadingUser ? (
        <div className="loadingContainer"></div>
      ) : user ? (
        <ConfirmBuy />
      ) : (
        <MessageWithoutLink />
      )}
    </Container>
  );
};

export default ConfirmBuyPage;
