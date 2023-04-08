import Product from './Product/';

export default function Products({products}) {

    return (
        <>
            {products.map(
                (products, index) => (
                    <Product 
                        key={index}
                        products={products}
                    />
                )
            )}
        </>
    );
}

