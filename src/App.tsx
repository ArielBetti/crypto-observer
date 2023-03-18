import { useState } from "react";
import { Col, Input, PreviewChart, Table, TickerValuation } from "./components";
import { useGetMartketCoinsQuery } from "./querys";
import useDebounce from "./hooks/useDebounce";
import { useGetMarketCoinQuery } from "./querys/useGetMarketCoinQuery";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function App() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 1800);
  const [page, setPage] = useState(1);
  const marketCoin = useGetMarketCoinQuery(debounceSearch);

  const { data: marketCoins, fetchNextPage } = useGetMartketCoinsQuery(page);

  const handleLoadingMore = () => {
    setPage(page + 1);
    fetchNextPage();
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="fixed top-0 left-0 z-20 flex py-5 bg-zinc-900/80 backdrop-blur-md w-full">
        <div className="flex flex-col container mx-auto px-4">
          <div className="max-w-lg">
            <Input
              onChange={(e) => setSearch(e.target.value)}
              customLabel={
                <div className="flex gap-2 items-center justify-start">
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  Search coins
                </div>
              }
              placeholder="bitcoin, ethereum, dogecoin..."
            />
          </div>
          {marketCoin?.data && search && (
            <div
              key={marketCoin.data?.id}
              className="transition-colors w-full gap-5 flex md:flex-row flex-col md:flex-nowrap flex-wrap items-start justify-between px-3 py-5 border-b border-zinc-800 hover:bg-zinc-800"
            >
              <div className="flex items-center gap-5">
                <span className="text-sm font-light">
                  {marketCoin.data?.market_data?.market_cap_rank}
                </span>
                <img
                  className="w-8 h-8"
                  src={marketCoin.data?.image.small}
                  alt="Logo da moeada"
                />
                <h1 className="text-lg">{marketCoin.data?.name}</h1>
                <span className="text-sm font-light">
                  {marketCoin.data?.symbol}
                </span>
              </div>
              <div className="gap-5 flex md:flex-row flex-col w-full flex-wrap items-center md:justify-end justify-start">
                <Col label="Valuation">
                  <TickerValuation
                    value={
                      marketCoin.data?.market_data?.price_change_percentage_24h
                    }
                  />
                </Col>
                <Col label="Price">
                  <h1 className="text-lg">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(marketCoin.data?.market_data?.current_price.brl)}
                  </h1>
                </Col>
                <Col label="Capital">
                  <h1 className="text-lg">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(marketCoin.data?.market_data?.market_cap.brl)}
                  </h1>
                </Col>
                <Col>
                  <PreviewChart
                    profit={
                      marketCoin.data?.market_data
                        ?.price_change_percentage_24h < 0
                        ? "red"
                        : "green"
                    }
                    name={marketCoin.data?.name}
                    data={marketCoin.data?.market_data?.sparkline_7d}
                  />
                </Col>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col container mx-auto px-4">
        <Table
          loadMoreMarketCoins={handleLoadingMore}
          marketCoins={marketCoins?.pages}
        />
      </div>
    </div>
  );
}

export default App;
