export const ENDPOINTS = {
  listMarketCoins: (page: number) => `/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=${page}&sparkline=true`
}