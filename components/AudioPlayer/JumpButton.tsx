import { TouchableOpacity } from "react-native";
import React, { ComponentProps, FC } from "react";
import { Feather } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props extends Omit<ComponentProps<typeof Feather>, "onPress"> {
  onPress: () => void;
}

const JumpButton: FC<Props> = ({ onPress, size = 40, style, ...iconProps }) => {
  const buttonColor = useThemeColor({}, "headerBackButton");
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 5 }}>
      <Feather size={size} color={buttonColor} {...iconProps} />
    </TouchableOpacity>
  );
};

export default JumpButton;
