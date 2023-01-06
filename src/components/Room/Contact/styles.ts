import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid var(--color-gray4);
  border-radius: var(--bd-radius);
  align-self: flex-end;
  justify-self: flex-end;
  width: 100%;
  background-color: var(--color-white);

  @media screen and (min-width: 390px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    max-width: 266px;
    flex-direction: column;
    margin-top: -60px;
    margin-right: 30px;
  }

  a {
    display: flex;
    gap: 16px;
    width: max-content;
    padding: 14px 20px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--bd-radius);

    svg {
      font-size: 22px;
    }
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  div {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-weight: var(--font-weg2);
  }
`;

export const ImageUser = styled.div``;
