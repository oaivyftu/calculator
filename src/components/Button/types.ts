import { ReactNode } from "react";

export interface IButton {
  name: string;
  color?: string;
  span?: number;
  children: ReactNode;
  onClickHandler(): void;
}
