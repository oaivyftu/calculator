import React from "react";

import { IButton } from "./types";

import * as S from "./styles";

const Button: React.FC<IButton> = ({ color, children, onClickHandler }) => (
  <S.Button color={color} onClick={onClickHandler}>
    {children}
  </S.Button>
);

export default Button;
