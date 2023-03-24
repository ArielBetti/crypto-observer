// types
import { TMarketCoinProps } from "./types";

// components
import { Col, PreviewChart, RowSkeleton, TickerValuation } from "../..";
import axios from "axios";
import { ERROR_DICTIONARY } from "./dictionary";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

// ::
const MarketCoin = ({ coin, hasLoading, error }: TMarketCoinProps) => {
  if (error) {
    return (
      <div className="transition-colors w-full gap-5 flex md:flex-row flex-col md:flex-nowrap flex-wrap items-start justify-between pb-3 pt-10">
        <div className="flex gap-2 items-center justify-start text-red-300 border border-red-500 p-2 rounded-sm bg-red-900/40 backdrop-blur-sm w-full max-w-lg ">
          <ExclamationCircleIcon className="h-5 w-5" />
          {axios.isAxiosError(error)
            ? error.response?.status === 404
              ? ERROR_DICTIONARY[404]
              : ERROR_DICTIONARY.default
            : ERROR_DICTIONARY.default}
        </div>
      </div>
    );
  }
  if (hasLoading)
    return (
      <div className="transition-colors w-full gap-5 flex md:flex-row flex-col md:flex-nowrap flex-wrap items-start justify-between pb-3 pt-10">
        <RowSkeleton isLoading rows={1} />
      </div>
    );

  if (!coin) return null;

  return (
    <div
      key={coin?.id}
      className="transition-colors w-full gap-5 flex md:flex-row flex-col md:flex-nowrap flex-wrap items-start justify-between pb-3 pt-10"
    >
      <div className="flex items-center gap-5 min-w-[200px]">
        <span className="text-sm font-light">
          {coin?.market_data?.market_cap_rank}
        </span>
        <img className="w-8 h-8" src={coin?.image.small} alt="Logo da moeada" />
        <h1 className="text-lg">{coin?.name}</h1>
        <span className="text-sm font-light">{coin?.symbol}</span>
      </div>
      <div className="gap-5 flex md:flex-row flex-col w-full flex-wrap items-center md:justify-end justify-start">
        <Col label="Valuation">
          <TickerValuation
            value={coin?.market_data?.price_change_percentage_24h}
          />
        </Col>
        <Col label="Price">
          <h1 className="text-lg">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(coin?.market_data?.current_price.brl)}
          </h1>
        </Col>
        <Col label="Capital">
          <h1 className="text-lg">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(coin?.market_data?.market_cap.brl)}
          </h1>
        </Col>
        <Col>
          <PreviewChart
            profit={
              coin?.market_data?.price_change_percentage_24h < 0
                ? "red"
                : "green"
            }
            name={coin?.name}
            data={coin?.market_data?.sparkline_7d}
          />
        </Col>
      </div>
    </div>
  );
};

export default MarketCoin;
