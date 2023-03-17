import { PreviewChart, Table } from "./components";
import { COIN_MARKETS } from "./mock";

function App() {
  return (
    <div className="App h-screen w-screen">
      <Table marketCoins={COIN_MARKETS} />
    </div>
  );
}

export default App;
