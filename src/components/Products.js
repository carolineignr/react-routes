import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Products.module.css';

export const Products = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    loadProducts();
  }, [])

  async function loadProducts() {
    const { data } = await axios.get('https://ranekapi.origamid.dev/json/api/produto');

    setProducts(data);
  }

  return (
    <section>
      {products.length > 0 && products.map(product => {
        return (
          <Link to={`/product/${product.id}`} className={style.product + " animeLeft"} key={product.id}>
            <img src={product.fotos[0].src} alt={product.fotos[0].titulo}></img>
            <p>{product.nome}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default Products;
