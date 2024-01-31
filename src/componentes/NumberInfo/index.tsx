import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";

export default function NumberInfo() {
    const { contextProductCount } = useContext(ContextProductCount);

    return (
        <div>
            {contextProductCount}
        </div>
    );
}