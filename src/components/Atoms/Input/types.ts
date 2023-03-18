import { ReactNode, InputHTMLAttributes } from "react";

export type TInput = {
  customLabel?: ReactNode,
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
