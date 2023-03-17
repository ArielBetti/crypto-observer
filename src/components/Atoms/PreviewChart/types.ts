import { TMarketCoinSparkLine } from "../../../interfaces"

export type TPreviewChartProps = {
  data?: TMarketCoinSparkLine,
  name: string,
  profit: 'red' | 'green',
}