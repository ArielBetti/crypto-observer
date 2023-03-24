import { AxiosError } from "axios"
import { TMarketCoinData } from "../../../interfaces"

export type TMarketCoinProps = {
  coin: TMarketCoinData | undefined,
  hasLoading?: boolean,
  error?: unknown,
}
