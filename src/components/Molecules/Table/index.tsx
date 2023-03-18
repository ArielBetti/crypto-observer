import { useMemo, memo } from "react";
import { Virtuoso } from "react-virtuoso";
import { twMerge } from "tailwind-merge";
import { Col, PreviewChart, RowSkeleton, TickerValuation } from "../../";
import { TTableProps } from "./types";

const Table = ({ marketCoins, loadMoreMarketCoins }: TTableProps) => {
  if (!marketCoins) return <RowSkeleton isLoading rows={3} />;

  const marketCoinsList = useMemo(
    () => marketCoins?.map((page) => page?.map((market) => market)).flat(1),
    [marketCoins]
  );

  return (
    <Virtuoso
      totalCount={marketCoinsList.length}
      useWindowScroll
      style={{ paddingTop: "140px" }}
      className="h-screen"
      data={marketCoinsList}
      atBottomStateChange={() => loadMoreMarketCoins()}
      itemContent={(_index, market) => (
        <div
          key={market.id}
          className={twMerge("transition-colors w-full gap-5 flex md:flex-row flex-col md:flex-nowrap flex-wrap items-start justify-between px-3 py-5 border-b border-zinc-800 hover:bg-zinc-800", _index === 0 && ('mt-28'))}
        >
          <div className="flex items-center gap-5">
            <span className="text-sm font-light">{market.market_cap_rank}</span>
            <img className="w-8 h-8" src={market?.image} alt="Logo da moeada" />
            <h1 className="text-lg">{market.name}</h1>
            <span className="text-sm font-light">{market.symbol}</span>
          </div>
          <div className="gap-5 flex md:flex-row flex-col w-full flex-wrap items-center md:justify-end justify-start">
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
            <Col label="Capital">
              <h1 className="text-lg">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(market.market_cap)}
              </h1>
            </Col>
            <Col>
              <PreviewChart
                profit={
                  market.price_change_percentage_24h < 0 ? "red" : "green"
                }
                name={market.name}
                data={market.sparkline_in_7d}
              />
            </Col>
          </div>
        </div>
      )}
    />
  );
};

export default memo(Table);
