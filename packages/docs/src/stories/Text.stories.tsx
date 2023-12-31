/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Form/Text",
  component: Text,
  args: {
    children: "Example test",
  },
  argTypes: {
    variant: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
