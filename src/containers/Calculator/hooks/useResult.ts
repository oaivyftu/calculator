import { useState, useCallback } from "react";

import { ICalcState } from "./types";

const CalculatorOperations: {
  [key: string]: (prevValue: number, nextValue: number) => number;
} = {
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "*": (prevValue, nextValue) => prevValue - nextValue,
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "=": (prevValue) => prevValue,
};

export default () => {
  const [state, setState] = useState<ICalcState>({
    displayValue: "0",
    value: null,
    operand: null,
    waitingForOperand: false,
  });

  const inputDigit = useCallback(
    (digit) => {
      if (state.waitingForOperand) {
        setState({
          ...state,
          displayValue: String(digit),
          waitingForOperand: false,
        });
      } else {
        setState({
          ...state,
          displayValue:
            state.displayValue === "0"
              ? String(digit)
              : state.displayValue + digit,
        });
      }
    },
    [state]
  );

  const performOperation = useCallback(
    (operand) => {
      if (state.value === null) {
        setState({
          ...state,
          value: parseFloat(state.displayValue),
          waitingForOperand: true,
        });
      } else {
        const newValue = CalculatorOperations[state.operand || operand](
          state.value,
          parseFloat(state.displayValue)
        );
        setState({
          ...state,
          value: newValue,
          displayValue: String(newValue),
          waitingForOperand: true,
        });
      }
      setState({
        ...state,
        operand,
      });
    },
    [state]
  );

  return { state, setState, inputDigit, performOperation };
};
