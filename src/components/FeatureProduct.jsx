import { useProductContext } from "../context/productcontex";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <div className="section">
      <div className="container">
        <div className="common-heading">Check Out Our Featured Products</div>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
