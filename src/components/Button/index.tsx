import { type TouchableOpacityProps } from "react-native";

import { type ButtonTypeStyleProps, Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
