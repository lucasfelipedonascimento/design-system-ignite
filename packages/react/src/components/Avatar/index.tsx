/* eslint-disable prettier/prettier */
import React, { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./style";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";