import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './Product.module.css';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null)
  const [loading, setLoading] = React.useState(true);
  const [position, setPosition] = React.useState("0");

  React.useEffect(() => {
    async function loadProduct() {
      const { data } = await axios.get(`https://ranekapi.origamid.dev/json/api/produto/${id}`);

      setProduct(data);
    }

    loadProduct();

    setLoading(false);
    setPosition(400)
  }, [id, position])

  function showProduct() {
    return (
      <section>
        <div className={style.product + " animeLeft"}>
          <img alt={product.nome} src={product.fotos[0].src}></img>

          <div className={style.productDescription}>
            <h2>{product.nome}</h2>
            <span className={style.productPrice}>R$ {product.preco}</span>
            <p>{product.descricao}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      {loading && <div className="loading"></div>}
      {!loading && product && showProduct()}
    </div>
  )
}

export default Product;
