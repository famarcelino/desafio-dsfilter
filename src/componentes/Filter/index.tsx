import './styles.css';

import { useContext, useState } from 'react';
import * as productService from '../../services/product-service';
import Listing from '../Listing';
import { ContextProductCount } from '../../utils/context-product';

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}


export default function Filter() {

    const {setContextProductCount} = useContext(ContextProductCount);

    const [formData, setFormData] = useState<FormData>({
        minPrice: undefined,
        maxPrice: undefined
    });

    let lenProd = productService.findByPrice(formData.minPrice || 0, formData.maxPrice ||Number.MAX_VALUE).map(product => <Listing key={product.id} product={product} />).length;

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
        
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        lenProd = productService.findByPrice(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE).map(product => <Listing key={product.id} product={product} />).length;
        setContextProductCount(lenProd);
    }

    setContextProductCount(lenProd);

    return (
        <>
            <div className='container ftr-container mt20'>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className='mb10'>Filtrar</button>
                </form>
            </div>
            <div className='container ftr-container mt20'>
                {
                    productService.findByPrice(formData.minPrice || 0, formData.maxPrice || Number.MAX_VALUE).map(product => <Listing key={product.id} product={product} />)
                }
            </div>
        </>
    );
}