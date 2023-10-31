/* eslint-disable prettier/prettier */
import React from "react";
import { Label, MultiStepContaier, Step, Steps } from "./styles";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContaier>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContaier>
  );
}

MultiStep.displayName = "MultiStep";
