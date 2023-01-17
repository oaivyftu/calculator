import React from "react";

import { IButton } from "./types";

import * as S from "./styles";

const Button: React.FC<IButton> = ({ color, span, children, onClickHandler }) => (
  <S.Button color={color} onClick={onClickHandler} span={span}>
    {children}
  </S.Button>
);

export default Button;
