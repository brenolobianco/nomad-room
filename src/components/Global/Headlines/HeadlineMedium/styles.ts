import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 275px;
  background-image: linear-gradient(
      to right,
      var(--color-bg-headline),
      var(--color-bg-headline)
    ),
    url("https://i.imgur.com/KfVApwq.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
