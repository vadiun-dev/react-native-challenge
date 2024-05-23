import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "@/app/themes/colors";

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}

const CustomIcon = ({ name, size, color }: Props) => {
  return (
    <Ionicons name={name} size={size ?? 25} color={color ?? colors.highlight} />
  );
};

export default CustomIcon;
