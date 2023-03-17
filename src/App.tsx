import { useState } from "react";
import { PreviewChart, Table } from "./components";
import { COIN_MARKETS } from "./mock";
import { useGetMartketCoinsQuery } from "./querys";

function App() {
  const [page, setPage] = useState(1);

  const {
    data: marketCoins,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useGetMartketCoinsQuery(page);

  const handleLoadingMore = () => {
    setPage(page +1);
    fetchNextPage();
  }

  return (
    <div className="App h-screen w-screen">
      <Table marketCoins={marketCoins?.pages} />
      <button onClick={() => handleLoadingMore()} >Carregar mais</button>
    </div>
  );
}

export default App;
