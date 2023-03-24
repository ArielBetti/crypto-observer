import { ReactNode, InputHTMLAttributes } from "react";

export type TInput = {
  customLabel?: ReactNode,
  label?: string;
  complement?: ReactNode,
} & InputHTMLAttributes<HTMLInputElement>;
