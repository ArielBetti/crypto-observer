// api: requesters
import { requester } from "../api/requester";

// end-poins
import { ENDPOINTS } from "../endpoints";

// types
import type { TMarketCoin } from "../interfaces";

export const getMarketCoinsList = async (offSet: number): Promise<TMarketCoin[]> => {
  const { data } = await requester()
    .get<TMarketCoin[]>(`${ENDPOINTS.listMarketCoins(offSet || 1)}`);

  return data;
};