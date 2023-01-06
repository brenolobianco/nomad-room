import { ReactNode } from "react";
import { Container } from "./styles";

interface iHeadlineMedium {
  children?: ReactNode;
}

export const HeadlineMedium = ({ children }: iHeadlineMedium) => {
  return <Container>{children && children}</Container>;
};
