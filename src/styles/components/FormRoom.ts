import styled from "styled-components";

export const ContainerRegisterRoom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 100px;

  h2 {
    font-size: 2rem;
    font-weight: 700;

    @media (min-width: 740px) {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 1300px) {
    width: 1200px;
  }
`;

export const ContainerFormRoom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 45px 16px;
  width: 100%;
  border: 1px solid var(--color-gray4);
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 45px 40px;
  }

  label {
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    input {
      width: 100%;
      padding: 13px 30px;
      background-color: var(--color-gray5);
      border-radius: 10px;
      outline: none;
    }
  }

  textarea {
    resize: none;
    outline: none;
    width: 100%;
    padding: 13px 30px;
    background-color: var(--color-gray5);
    border-radius: 10px;
  }

  p {
    text-align: start;
  }
`;

export const ContainerAboutRoom = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 22px;
  width: 257px;
  flex-wrap: wrap;
  position: relative;
  list-style: none;

  li {
    font-size: 1rem;
    display: flex;
    gap: 5px;

    label {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 5px;
      font-size: 1rem;
      font-weight: 400;
      margin-left: 5px;
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      background-color: var(--color-gray5);
      border-radius: 24px;
      cursor: pointer;
    }
    input[type="checkbox"]:checked {
      accent-color: var(--color-primary);
    }
  }
  li:nth-child(2) {
    margin-right: 12px;
  }
  li:nth-child(6) {
    margin-right: -4px;
  }
`;

export const LocationRoom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 253px;

  h3 {
    font-size: 1.125rem;
    text-align: start;
  }
`;

export const Error = styled.p`
  color: var(--color-error);
`;

export const BorderHeader = styled.div`
  background-color: var(--color-gray4);
  width: 100%;
  height: 1px;
  margin-bottom: 40px;
`;
