import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  h1 {
    font-size: 100px;
    margin: 200px 0 0 0;
  }
  h2 {
    margin-top: 0;
    font-weight: 300;
  }
  p {
    padding: 20px;
  }

  @media (min-width: 600px) {
    p {
      font-size: 20px;
    }
  }
`;
