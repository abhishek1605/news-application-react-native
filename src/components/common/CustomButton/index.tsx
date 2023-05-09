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
  bgColor: string;
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
    bgColor: "primary.backgroundColor",
  };

  if (isSelected) {
    styleObj.variant = "solid";
    styleObj.bgColor = "primary.buttonColor";
  }
  return (
    <Button
      {...styleObj}
      {...customStyle}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
      }}
      borderWidth={1}
      borderColor="primary.buttonColor"
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
