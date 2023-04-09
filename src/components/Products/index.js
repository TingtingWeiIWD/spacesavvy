import Product from './Product/';
import './styles.scss';

export default function Products({products}) {

    return (
        <div className='products-list'>
            {products.map(
                (products, index) => (
                    <Product 
                        key={index}
                        products={products}
                    />
                )
            )}
        </div>
    );
}

