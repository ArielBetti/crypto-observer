import { useQuery } from '@tanstack/react-query'

// end-points
import { ENDPOINTS } from '../endpoints'

// services
import { getMarketCoin } from '../services/getMarketCoin'

// ::
export const useGetMarketCoinQuery = (coin: string) => {
  return useQuery({
    queryKey: ["market_coin", ENDPOINTS.marketCoin],
    queryFn: () => getMarketCoin(coin.toLowerCase().trim()),
    refetchOnWindowFocus: false,
    enabled: !!coin,
  })
}