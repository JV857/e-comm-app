import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../utils/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category, company } = curElem;
  // console.log("curElem", curElem);
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3 style={{fontWeight:"bold"}}>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
          <p>
            <span style={{fontWeight:"bold"}}>Brand :</span>{" "}
            <span style={{ textTransform: "capitalize" }}>{company}</span>
          </p>
          {/* <p
            dangerouslySetInnerHTML={{
              __html: `${description.slice(0, 150)}...`,
            }}
          /> */}
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
