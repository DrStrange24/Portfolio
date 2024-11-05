import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: string;
};

export const CustomButton = ({
  text,
  onClick,
  variant = "success",
}: ButtonProps) => {
  return (
    <BootstrapButton onClick={onClick} variant={variant}>
      {text}
    </BootstrapButton>
  );
};
