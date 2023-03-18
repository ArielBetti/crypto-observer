import { ReactNode } from "react";
import { TMarketCoin } from "../../../interfaces";

export type TTableProps = {
  loadMoreMarketCoins: () => void;
  marketCoins: TMarketCoin[][] | undefined;
  isLoading?: boolean,
};
