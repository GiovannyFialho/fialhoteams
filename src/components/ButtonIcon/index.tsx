import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { type ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface ButtonIcon extends TouchableOpacityProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({
  iconName,
  type = "PRIMARY",
  ...rest
}: ButtonIcon) {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
}
