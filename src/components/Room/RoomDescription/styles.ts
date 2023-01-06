import styled from "styled-components";

export const Container = styled.section`
  margin-top: 30px;
  max-width: 690px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    margin-top: -84px;
  }
`;
