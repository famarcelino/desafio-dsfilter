import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function Listing({ product }: Props) {
    return (
            <div className='lst-container mb10'>
                <p>{product.name}</p>
                <h3>R$ {product.price}</h3>
            </div>
    );
}