import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

// icons
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { TTickerValuationProps } from "./types";

// ::
const TickerValuation = ({ value }: TTickerValuationProps) => {
  const indication = useMemo(() => value > 0, [value]);

  return (
    <div
      className={twMerge(
        "flex items-center justify-start gap-2",
        indication ? "text-green-500" : "text-red-500"
      )}
    >
      {indication ? (
        <ArrowTrendingUpIcon className="h-5 w-5" />
      ) : (
        <ArrowTrendingDownIcon className="h-5 w-5" />
      )}
      <p>
        {new Intl.NumberFormat("pt-BR", {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value / 100)}
      </p>
    </div>
  );
};

export default TickerValuation;
