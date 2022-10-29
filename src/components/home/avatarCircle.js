import React, { useEffect, useState } from "react";
import { Circle } from "react-konva";
import useImage from "use-image";

function AvatarCircle({ avatar, radius, ...rest }) {
  const [image] = useImage(avatar);

  return image ? (
    <Circle
      radius={radius}
      fillPatternImage={image}
      fillPatternRepeat={"no-repeat"}
      fillPatternOffset={{ x: radius, y: radius }}
      fillPatternScale={{
        x: radius / (image.width / 2),
        y: radius / (image.height / 2),
      }}
      {...rest}
    />
  ) : (
    <Circle radius={radius} fill={"#3b82f690"} {...rest} />
  );
}

export default AvatarCircle;
