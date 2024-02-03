import CardList from "../CardList"
import { ProductDTO } from "../../models/product";
import { useEffect, useState } from "react";

type Props = {
    productList: ProductDTO[];
}

export default function Listing({ productList }: Props) {
    const [products, setProducts] = useState<ProductDTO[]>(productList);

    useEffect(() => {
        setProducts(productList);
    }, [productList]);

    return (
        <div className='container ftr-container mt20'>
            {
                products.length > 0 
                ?
                products.map((product) => {
                    return (
                        <CardList key={product.id} product={product} />
                    )
                })
                :
                <h3 className="mb10">Nenhum produto encontrado no intervalo informado!</h3>
            }
        </div>
    )
}
