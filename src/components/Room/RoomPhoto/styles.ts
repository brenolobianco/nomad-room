import styled from "styled-components";

export const Container = styled.section`
  height: 250px;

  @media screen and (min-width: 1024px) {
    height: 500px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
