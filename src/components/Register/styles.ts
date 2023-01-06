import styled from "styled-components";

export const ContainerFormRegister = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormRegister = styled.form`
  max-width: 512px;
  background: var(--color-white);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: -90px;
  padding: 40px;

  p {
    height: 20px;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-gray1);
    align-self: flex-start;
    margin-bottom: 10px;
    @media (max-width: 480px) {
      height: 51.82px;
      margin-right: 110px;
    }
  }

  button {
    margin-top: 23px;
  }
`;
