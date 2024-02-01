import { useState } from "react";
import Header from "./componentes/Header";
import { ContextProductCount } from "./utils/context-product";
import ListingBody from "./componentes/ListingBody";

export default function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0);


  return (
    <>
      <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
        <Header />
        <ListingBody />
      </ContextProductCount.Provider>
    </>
  );
}
