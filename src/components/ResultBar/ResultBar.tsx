import React from "react";
import { IResultBar } from './types';

import * as S from "./styles";

const ResultBar: React.FC<IResultBar> = ({ result }) => (
  <S.ResultBar>{result}</S.ResultBar>
);

export default ResultBar;
