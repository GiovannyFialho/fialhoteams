import { TouchableOpacityProps } from "react-native";

import { Container, Title, type FilterStyleProps } from "./styles";

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
