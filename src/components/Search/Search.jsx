import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./search.css";
import Dropdown from "react-bootstrap/Dropdown";
import img from "../Home/images/Products/Clothes/Girl/2-3-years-nn312-445-nautinati-original-imagzeszdkzyxgk5.webp";
import { dataContext } from "../Data/Data-object/Data";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const { data, search } = useContext(dataContext);
  const navigate = useNavigate();

  const searchresult = data.filter((data) => {
    const regexp = new RegExp(`${search}`, "i");
    if (regexp.test(`${data.name}`) && search != "") {
      return data;
    }
  });

  return (
    <div id="search-container">
      <h1 style={{ paddingTop: "50px", fontFamily: "cursive" }}>
        Search products
      </h1>
      <div className="container search">
        <nav id="Search-side-nav"></nav>

        <div className="container item-container" style={{ marginTop: "60px" }}>
          <div className="row d-flex justify-content-start">
            {searchresult.length >= 1 ? (
              searchresult.map((data) => (
                <div className="col-6 col-md-6 col-lg-3 ">
                  <Card
                    style={{ marginBottom: "15px" }}
                    className="card"
                    key={data.id}
                    onClick={() =>
                      navigate(`/product/${data.id}`, { replace: "true" })
                    }
                  >
                    <Card.Img
                      variant="top"
                      src={data.image}
                      className="shop-card-img"
                    />
                    <Card.Body className="shop-card-body">
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text className="shop-card-text">
                        <span
                          style={{ color: "lightgreen", fontWeight: "bold" }}
                        >
                          {" "}
                          ₹{data.offerprice}{" "}
                        </span>
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{data.price}
                        </span>
                      </Card.Text>
                      <p> {data.description.slice(0, 14)}</p>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <h1 style={{ fontFamily: "cursive" }}>
                Nothing matches your search...
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
