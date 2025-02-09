import { View, Text, TouchableOpacity } from 'react-native'
import React, { ComponentProps, FC } from 'react'
import { FontAwesome,Ionicons } from "@expo/vector-icons";
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props extends Omit<ComponentProps<typeof Ionicons>, "onPress"> {
    onPress: () => void,
}

const PlayerButton: FC<Props> = ({onPress, size = 40, style, ...iconProps}) => {
    const buttonColor = useThemeColor({}, "headerBackButton")
  return (
    <TouchableOpacity
            onPress={onPress}
            style={{ marginHorizontal: 5 }}
          >
            <Ionicons size={size} color={buttonColor} {...iconProps} />
          </TouchableOpacity>
  )
}

export default PlayerButton