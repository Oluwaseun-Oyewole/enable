import styled from "styled-components";
import { default as tw } from "twin.macro";

export interface ButtonInterface
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: string;
}

const ButtonStyles = styled.button<{
  background?: string;
  color?: string;
}>`
  ${tw`transition-all ease-in-out duration-700`}
`;

export const Button = ({
  children,
  type,
  onClick,
  className,
}: ButtonInterface) => {
  return (
    <ButtonStyles type={type} onClick={onClick} className={className}>
      {children}
    </ButtonStyles>
  );
};
