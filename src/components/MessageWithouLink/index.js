import { Container } from "./styles";

const MessageWithoutLink = () => {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        {" "}
        O link que você utilizou não está vinculado a nenhum vendedor, entre em
        contato com algum vendedor para receber o link correto.
      </p>
    </Container>
  );
};

export default MessageWithoutLink;
