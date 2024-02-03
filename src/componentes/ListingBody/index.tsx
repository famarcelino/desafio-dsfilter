import { useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import { ProductDTO } from "../../models/product";
import { ContextProductCount } from "../../utils/context-product";
import * as productService from '../../services/product-service';

export default function ListingBody() {

    const { setContextProductCount } = useContext(ContextProductCount);

    const [products, setProducts] = useState<ProductDTO[]>(productService.findByPrice(0, Number.MAX_VALUE));

    useEffect(() => {
        setContextProductCount(products.length);
    }, [products, setContextProductCount]);

    function handleFilter(min: number, max: number) {
        const listProd = productService.findByPrice(min, max);
        setProducts(listProd);
        setContextProductCount(listProd.length);
    }

    return (
        <>
            <Filter onFilter={handleFilter} />
            <Listing productList={products} />
        </>
    );
}