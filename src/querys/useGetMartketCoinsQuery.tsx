import { useInfiniteQuery } from '@tanstack/react-query'

// end-points
import { ENDPOINTS } from '../endpoints'

// services
import { getMarketCoinsList } from '../services/getMarketCoinsList'

// ::
export const useGetMartketCoinsQuery = (page: number) => {
  return useInfiniteQuery({
    queryKey: ['list', ENDPOINTS.listMarketCoins],
    queryFn: ({ pageParam }) => getMarketCoinsList(pageParam),
    getPreviousPageParam: () => page !== 0 ? page -1 : undefined,
    getNextPageParam: (lastPage) => lastPage ? page + 1 : undefined,
    refetchOnWindowFocus: false,
  })
}