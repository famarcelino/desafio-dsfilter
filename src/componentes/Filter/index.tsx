import './styles.css';

import { useContext, useEffect, useState } from 'react';
import * as productService from '../../services/product-service';
import Listing from '../Listing';
import { ContextProductCount } from '../../utils/context-product';
import { ProductDTO } from '../../models/product';

type Props = {
    min: number;
    max: number;
}

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}


export default function Filter({min, max}: Props) {

    const { setContextProductCount } = useContext(ContextProductCount);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [formData, setFormData] = useState<FormData>({
        minPrice: undefined,
        maxPrice: undefined
    });

    useEffect(() => {
        const listProd = productService.findByPrice(min, max);
        setProducts(listProd);
        setContextProductCount(listProd.length);
    }, [formData]);


    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });

    }

    function handleOnSubmit(event: any) {
        event.preventDefault();
        onFilter(Number(formData.minPrice) || min, Number(formData.maxPrice) || max);
    }

    function onFilter(min: number, max: number) {
        const listProd = productService.findByPrice(min, max);
        setProducts(listProd);
        setContextProductCount(listProd.length);
    }

    return (
        <>
            <div className='container ftr-container mt20'>
                <form onSubmit={handleOnSubmit}>
                    <div className='mb20'>
                        <input
                            name="minPrice"
                            value={formData.minPrice}
                            type="text"
                            placeholder="Preço mínimo"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb20'>
                        <input
                            name="maxPrice"
                            value={formData.maxPrice}
                            type="text"
                            placeholder="Preço máximo"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className='mb10' >Filtrar</button>
                </form>
            </div>
            <div className='container ftr-container mt20'>
                {
                    products.length > 0 ?
                    products.map(
                        product => <Listing key={product.id} product={product} />
                    )
                    :
                    <h2 className='mb10'>Nenhum produto encontrado!</h2>
                }
            </div>
        </>
    );
}