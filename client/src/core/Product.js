import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultBanner = 'https://via.placeholder.com/300x150';
  const defaultLogo = 'https://via.placeholder.com/100x100';

  const loadSingleProduct = (productId) => {
    setLoading(true);
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        listRelated(data._id).then((relatedData) => {
          if (relatedData.error) {
            setError(relatedData.error);
          } else {
            setRelatedProduct(relatedData);
          }
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    loadSingleProduct(match.params.productId);
  }, [match.params.productId]);

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <h4>Product Details</h4>
            {product.banner && (
              <img
                src={product.banner}
                alt={`${product.name} banner`}
                className="img-fluid mb-3"
                onError={(e) => (e.target.src = defaultBanner)}
              />
            )}
            {product.logo && (
              <img
                src={product.logo}
                alt={`${product.name} logo`}
                className="img-fluid mb-3"
                onError={(e) => (e.target.src = defaultLogo)}
              />
            )}
            {product.description && (
              <Card product={product} showViewProductButton={false} />
            )}
          </div>
          <div className="col-md-6">
            <h4>Related Products</h4>
            {relatedProduct.map((p, i) => (
              <div className="mb-3" key={i}>
                <Card product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
