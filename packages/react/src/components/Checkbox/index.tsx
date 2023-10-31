/* eslint-disable prettier/prettier */
import React, { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { Check } from "phosphor-react";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
