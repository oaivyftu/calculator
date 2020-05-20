import { ReactNode } from "react";

export interface IButton {
  name: string;
  color?: string;
  children: ReactNode;
  onClickHandler(): void;
}
