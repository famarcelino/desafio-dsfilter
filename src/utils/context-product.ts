import { createContext } from "react";

export type ContextProductCountType = {
    contextProductCount: number;
    setContextProductCount: (ContextProductCountType: number) => void;
}

export const ContextProductCount = createContext<ContextProductCountType>({
    contextProductCount: 0,
    setContextProductCount: () => {}
})