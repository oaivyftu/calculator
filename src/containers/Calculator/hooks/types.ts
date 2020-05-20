export interface ICalcState {
  displayValue: string;
  value: number | null;
  operand: string | null;
  waitingForOperand: boolean;
}
