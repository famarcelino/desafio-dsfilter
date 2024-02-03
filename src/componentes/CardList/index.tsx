import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function CardList({ product }: Props) {
    return (
            <div className='lst-container mb10'>
                <p>{product.name}</p>
                <h3>R$ {product.price.toFixed(2)}</h3>
            </div>
    );
}