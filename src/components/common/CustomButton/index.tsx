import { Button } from "native-base";
import React from "react";

type Props = {
  btnText: string;
  onPress: () => void;
  isSelected: boolean;
  isDisabled: boolean;
  customStyle: object;
};
type styleObjType = {
  variant: string;
  bg: string;
};
const CustomButton = (props: Props) => {
  const {
    btnText,
    onPress,
    isSelected,
    isDisabled = false,
    customStyle,
  } = props;

  const styleObj: styleObjType = {
    variant: "outline",
    bg: "primary.backgroundColor",
  };

  if (isSelected) {
    styleObj.variant = "solid";
    styleObj.bg = "primary.500";
  }
  return (
    <Button
      {...styleObj}
      {...customStyle}
      borderColor="primary.500"
      _text={{
        color: isSelected
          ? "primary.selectedBtnTextColor"
          : "primary.textColor",
        fontWeight: "bold",
      }}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      {btnText}
    </Button>
  );
};

export default CustomButton;
