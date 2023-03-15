import { ReactNode, useMemo } from "react";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { COIN_MARKETS } from "./mock";

const Col = ({ label, children }: { label?: string; children: ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      {label && <p className="text-sm font-light">{label}</p>}
      <div className="flex items-center justify-start gap-2">{children}</div>
    </div>
  );
};

const TickerValuation = ({ value }: { value: number }) => {
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

function App() {
  return (
    <div className="App h-screen w-screen">
      <div className="container px-4 mx-auto pt-10 flex flex-col items-start justify-start w-full">
        {COIN_MARKETS.map((market, index) => (
          <div className="transition-colors w-full gap-5 flex md:flex-row flex-col flex-wrap md:items-center items-start justify-between px-3 py-5 border-b border-zinc-800 hover:bg-zinc-800">
            <div className="flex items-center gap-5">
              <Col>
                <span className="text-sm font-light">{index + 1}</span>
              </Col>
              <img
                className="w-8 h-8"
                src={market.image}
                alt="Logo da moeada"
              />
              <Col label="Name">
                <h1 className="text-lg">{market.name}</h1>
                <span className="text-sm font-light">{market.symbol}</span>
              </Col>
            </div>
            <div className="gap-5 flex flex-wrap items-center justify-start ">
              <Col label="Valuation">
                <TickerValuation value={market.price_change_percentage_24h} />
              </Col>
              <Col label="Price">
                <h1 className="text-lg">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(market.current_price)}
                </h1>
              </Col>
              <Col label="Mkt_cap">
                <h1 className="text-lg">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(market.market_cap)}
                </h1>
              </Col>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
