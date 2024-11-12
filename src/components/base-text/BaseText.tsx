import { Color, colorToken } from "constants/color";
import { TypographyKey, typographyMap } from "constants/fontVariant"
import { FC, ReactNode } from "react";
import { Text, TextProps } from "react-native";


interface Props extends TextProps{
  kind: TypographyKey;
  color: Color;
  children: ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export const BaseText: FC<Props> = ({children, kind, color,mt = 0,mb = 0,ml = 0,mr = 0, ...rest}) => {
  const typographyStyle = typographyMap[kind];
  const colorStyle = {color: colorToken[color]};
  const marginStyle = {marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr};
  return <Text style={[typographyStyle,colorStyle,marginStyle]} {...rest}>{children}</Text>
}