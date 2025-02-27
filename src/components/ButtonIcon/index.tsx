import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import { type ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({
  iconName,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={iconName} type={type} />
    </Container>
  );
}
