/* eslint-disable prettier/prettier */
import { styled } from "@stitches/react";
import { ComponentProps, ElementType } from "react";

export const Button = styled("button", {
  all: "unset", // tira toda a estilização padrão
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  padding: "$2 $4",

  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed",
  },

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },

      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite500",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },

      tertiary: {
        color: "$gray100",

        "&:not(:disabled):hover": {
          color: "$white",
        },

        "&:disabled": {
          borderColor: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
