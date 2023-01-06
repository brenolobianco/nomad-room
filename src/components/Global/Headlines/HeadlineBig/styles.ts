import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 390px;
  padding: 0 16px;
  background-image: linear-gradient(
      to right,
      var(--color-bg-headline),
      var(--color-bg-headline)
    ),
    url("https://i.imgur.com/KfVApwq.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
