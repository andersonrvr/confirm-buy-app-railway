import styled from "styled-components";

export const Container = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #3700b3;
    margin: 1px;
    padding: 10px;
  }
  header > p {
    text-transform: capitalize;
  }

  main {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1e1e1e;
    width: 90%;
    min-height: 200px;
    border-radius: 5px;
    padding: 20px 25px;
  }

  .userInfos {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
  }
  .userInfos > svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  .infoTag {
    font-size: 12px;
    color: #03dac5;
    margin-bottom: 2px;
    font-weight: 800;
  }
  form {
    margin-top: 15px;
    font-size: 12px;
    color: #03dac5;
    width: 100%;
    font-weight: 800;
  }
  input {
    margin-top: 5px;
    padding: 5px;
    width: 100%;
    padding: 10px;
  }
  button {
    margin: 5px auto;
    margin-bottom: 0px;
    width: 100%;
    display: flex;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    background: #03dac5;
    padding: 10px;
    color: white;
    justify-content: center;
    font-size: 17px;
  }
  button:hover {
    cursor: pointer;
    background-color: #53ffd0;
  }
  @media (min-width: 500px) {
    main {
      width: 70%;
      max-width: 380px;
    }
  }

  @media (min-width: 800px) {
    display: flex;
    padding: 1px;
  }
  @media (min-width: 1100px) {
    main {
      margin: 200px auto;
      max-width: 500px;
    }
  }
`;
