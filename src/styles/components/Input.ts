import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: var(--sz-text2);
  padding: 16px 18px;
  width: 430px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background-color: var(--color-gray5);
  border-radius: var(--bd-radius);
  transition-duration: 0.3s;
  color: var(--color-gray1);

  &::placeholder {
    color: var(--color-gray3);
    font-size: var(--sz-text2);
  }

  &:is(:hover, :focus) {
    background-color: var(--color-gray4);
  }
  @media (max-width: 480px) {
    width: 296.82px;
  }
`;
