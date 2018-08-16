import React from "react";
import { AvatarImage } from "./style";

export default ({ avatar }) => {
  return (
    <AvatarImage
      src={avatar.author.avatar}
      alt={avatar.author.name}
      key={avatar.id}
    />
  );
};
