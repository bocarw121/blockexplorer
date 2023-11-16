import { useEffect, useState } from "react";

import "./App.css";
import { Balance } from "./components/Balance";
import { alchemy } from "./lib/alchemy";

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
    <main className="p-8">
      <div>Block Number: {blockNumber}</div>
      <Balance />
    </main>
  );
}

export default App;
