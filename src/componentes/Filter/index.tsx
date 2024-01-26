import './styles.css';

type FormData = {
    minPrice: number;
    maxPrice: number;
}

export default function Filter() {
    return (
        <div className='container ftr-container mt20'>
            <form>
                <div className='mb20'>
                    <input
                        name="minPrice"
                        value=""
                        type="text"
                        placeholder="Preço mínimo"
                    />
                </div>
                <div className='mb20'>
                    <input
                        name="maxPrice"
                        value=""
                        type="text"
                        placeholder="Preço máximo"
                    />
                </div>
                <button>Filtrar</button>
            </form>
        </div>
    );
}