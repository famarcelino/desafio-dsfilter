import './styles.css';
import { useState } from 'react';

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onFilter: Function;
}

export default function Filter({ onFilter }: Props) {

    const [minPrice, setMinPrice] = useState<number>(undefined);

    const [maxPrice, setMaxPrice] = useState<number>(undefined);

    function handleInputMinPrice(event: any) {
        setMinPrice(event.target.value);
    }

    function handleInputMaxPrice(event: any) {
        setMaxPrice(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(minPrice, maxPrice);
        onFilter(Number(minPrice) || 0, Number(maxPrice) || Number.MAX_VALUE);
    }

    return (
        <>
            <div className='container ftr-container mt20'>
                <form onSubmit={handleSubmit}>
                    <div className='mb20'>
                        <input
                            name="minPrice"
                            value={minPrice}
                            type="text"
                            placeholder="Preço mínimo"
                            onChange={handleInputMinPrice}
                        />
                    </div>
                    <div className='mb20'>
                        <input
                            name="maxPrice"
                            value={maxPrice}
                            type="text"
                            placeholder="Preço máximo"
                            onChange={handleInputMaxPrice}
                        />
                    </div>
                    <button type="submit" className='mb10' >Filtrar</button>
                </form>
            </div>
        </>
    );
}