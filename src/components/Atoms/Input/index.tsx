import { useId } from "react";

// types
import type { TInput } from "./types";

// ::
const Input = ({ customLabel, label, complement, ...rest }: TInput) => {
  const inputId = useId();

  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      {label && (
        <label className="" htmlFor={inputId}>
          {label}
        </label>
      )}
      {customLabel && (
        <label className="" htmlFor={inputId}>
          {customLabel}
        </label>
      )}
      <div className="flex gap-2 items-center w-full">
        <input
          type="search"
          className="w-full placeholder:text-zinc-500 bg-zinc-800 p-2 rounded-md shadow-sm text-xl"
          {...rest}
          id={inputId}
          name={inputId}
        />
        {complement}
      </div>
    </div>
  );
};

export default Input;
