import './styles.css';
import NumberInfo from '../NumberInfo';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className='dflex-spbetwwen'>
                    <h1>DSFilter</h1>
                    <div className='headerInfo'>
                        <NumberInfo /> <span>produto(s)</span>
                    </div>
                </div>
            </div>
        </header>
    );
}