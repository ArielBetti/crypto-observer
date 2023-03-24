import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { TMarketCoinData } from "../../../interfaces";
import { useGetMarketCoinQuery } from "../../../querys/useGetMarketCoinQuery";
import { Col, Input, MarketCoin, PreviewChart, TickerValuation } from "../..";
import axios, { AxiosError } from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";

// ::
const Search = () => {
  // states
  const [displayMarketCoin, setDisplayMarketCoin] = useState<
    TMarketCoinData | undefined
  >(undefined);
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 1800);

  // querys
  const marketCoin = useGetMarketCoinQuery(debounceSearch);

  const handleClearSearchCoin = () => {
    setDisplayMarketCoin(undefined);
    setSearch('');
  }

  useEffect(() => {
    if (!debounceSearch) setDisplayMarketCoin(undefined);
    if (debounceSearch && marketCoin?.data && !marketCoin?.isFetching) {
      setDisplayMarketCoin(marketCoin.data);
    }
  }, [debounceSearch, marketCoin]);

  return (
    <div className="fixed top-0 left-0 z-20 flex py-5 bg-black-piano-2/80 backdrop-blur-md w-full">
      <div className="flex flex-col container mx-auto px-4">
        <div className="max-w-lg flex w-full">
          <Input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            customLabel={
              <div className="flex gap-2 items-center justify-start">
                <MagnifyingGlassIcon className="h-4 w-4" />
                Search coins
              </div>
            }
            placeholder="bitcoin, ethereum, dogecoin..."
            complement={
              !!(marketCoin.data || marketCoin.isError) && (
                <button onClick={() => handleClearSearchCoin()} className="bg-red-500 rounded-sm p-2">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )
            }
          />
        </div>
        <MarketCoin
          error={marketCoin.error}
          hasLoading={marketCoin.isFetching}
          coin={displayMarketCoin}
        />
      </div>
    </div>
  );
};

export default Search;
