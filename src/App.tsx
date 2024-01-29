import { useState } from "react";
import Filter from "./componentes/Filter";
import Header from "./componentes/Header";
import { ContextProductCount } from "./utils/context-product";

export default function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0);


  return (
    <>
      <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
        <Header />
        <Filter />
      </ContextProductCount.Provider>
    </>
  );
}
