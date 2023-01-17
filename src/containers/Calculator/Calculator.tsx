import React, { useCallback, useEffect, useMemo } from "react";
import * as S from "./styles";
import theme from "../../theme";

import Button from "../../components/Button";
import ResultBar from "../../components/ResultBar";

import useResult from "./hooks/useResult";

const Calculator: React.FC = () => {
  const { state, clear, inputDigit, performOperation } = useResult();

  const numbers = useMemo(
    () =>
      Object.entries([7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']).map(([key, number]) => (
        <Button
          key={key}
          name="Number"
          span={number === 0 ? 2 : 1}
          onClickHandler={() => inputDigit(number)}
        >
          {number}
        </Button>
      )),
    [inputDigit]
  );

  const operands = useMemo(
    () =>
      Object.entries(["+", "-", "x", "/", "="]).map(([key, operand]) => (
        <Button
          key={key}
          name="Operand"
          color={theme.colors.secondary}
          onClickHandler={() => performOperation(operand)}
        >
          {operand}
        </Button>
      )),
    [performOperation]
  );

  return (
    <S.Wrap>
      <ResultBar result={state.displayValue} />
      <S.ButtonsWrap>
        <S.ClearArea>
          <Button name="Clear" onClickHandler={() => clear()}>
            Clear
          </Button>
        </S.ClearArea>
        <S.NumbersArea>{numbers}</S.NumbersArea>
        <S.ExpressionArea>{operands}</S.ExpressionArea>
      </S.ButtonsWrap>
    </S.Wrap>
  );
};

export default Calculator;
