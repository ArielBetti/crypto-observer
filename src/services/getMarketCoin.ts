// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../endpoints";

// types
import type { TMarketCoinData } from "../interfaces";

export const getMarketCoin = async (
  coin: string
): Promise<TMarketCoinData> => {
  const { data } = await requester().get<TMarketCoinData>(
    `${ENDPOINTS.marketCoin(coin)}`
  );

  return data;
};
