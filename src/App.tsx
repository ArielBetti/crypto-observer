import { useState } from "react";

// components
import { Search, Table } from "./components";

// react querys
import { useGetMartketCoinsQuery } from "./querys";

// ::
function App() {
  // states
  const [page, setPage] = useState(1);

  // querys
  const { data: marketCoins, fetchNextPage } = useGetMartketCoinsQuery(page);

  // handle: functions
  const handleLoadingMore = () => {
    setPage(page + 1);
    fetchNextPage();
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="flex flex-col container mx-auto px-4">
        <Search />
        <Table
          loadMoreMarketCoins={handleLoadingMore}
          marketCoins={marketCoins?.pages}
        />
      </div>
    </div>
  );
}

export default App;
