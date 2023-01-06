import { ReactNode } from "react";
import { Container } from "./styles";

interface iHeadlineBigProps {
  children?: ReactNode;
}

export const HeadlineBig = ({ children }: iHeadlineBigProps) => {
  return <Container>{children}</Container>;
};
