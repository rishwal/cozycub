import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./viewproducts.css";
import { useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../Data/Data-object/Data";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { RiHeartAddFill } from "react-icons/ri";

const ViewProductus = () => {
  const { data, cart, setCart, setBuynow, signedin } = useContext(dataContext);
  const navigate = useNavigate();

  let { id } = useParams();
  id = parseInt(id);

  const dataNow = data.find((data) => {
    if (data.id === id) {
      return data;
    }
  });

  const addToCart = (dataNow) => {
    if (signedin) {
      if (cart.includes(dataNow)) {
        const item = cart.find((val) => val == dataNow);
        item.qty++;
        toast("Item already present");
      } else {
        setCart([...cart, dataNow]);
        toast.success("Item added to Cart !");
      }
    }

    toast((t) => (
      <span>
        Custom and <b>bold</b>
        <button onClick={() => navigate("/login")}>Login</button>
      </span>
    ));
  };

  const buyNow = (dataNow) => {
    if (signedin) {
      navigate("/buy");
      setBuynow(dataNow);
    } else {
      toast.success("Successfully toasted!");
    }
  };

  const starfill = <FaStar style={{ color: "orange", marginRight: "2px" }} />;
  const star = <FaRegStar style={{ color: "orange", marginRight: "2px" }} />;
  const iconArr = [
    starfill,
    starfill,
    starfill,
    starfill,
    starfill,
    star,
    star,
    star,
    star,
    star,
  ];

  const printRating = (rating) => {
    const ratingArr = iconArr
      .slice(0, rating)
      .concat(iconArr.slice(5, 10 - rating));
    return ratingArr.map((starts) => starts);
  };

  return (
    <section id="main">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-4 img-column "
            style={{ maxWidth: "100%" }}
          >
            <Card className="card d-flex" style={{ alignItems: "center" }}>
              <Card.Img
                variant="top"
                src={dataNow.image}
                className="card-image"
              />
              <Card.Body style={{ display: "flex" }} id="product-card-body">
                <Button
                  variant="primary col-4 "
                  id="add-tocart-btn"
                  className="product-btns"
                  onClick={() => {
                    addToCart(dataNow);
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="primary col-4 "
                  className="product-btns"
                  id="buy-now-btn"
                  onClick={() => buyNow(dataNow)}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-8 text-column">
            <RiHeartAddFill className="wishlist-icon" />
            <div className="text-column-container">
              <h2>{dataNow.name}</h2>

              {printRating(dataNow.rating)}
              <h2 className="price">
                ₹{dataNow.offerprice}
                <span style={{ marginLeft: "10px" }}>₹{dataNow.price}</span>
              </h2>

              <h3>{dataNow.description}</h3>

              <span>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore eaque eius molestiae, quisquam tenetur laboriosam
                  aliqu0 blanditiis sunt pariatur porro voluptatibus quaerat
                  cup0itate natus harum? Cumque 0 exercitationem sapiente
                  maxime. Nam totam explicabo ipsam laboriosam autem eum porro,
                  debitis corrupti non rem sit neque voluptates omnis ex
                  deleniti consequatur est, 0 voluptatum unde. Ut voluptatibus
                  alias vel, praesentium dolorum inc0unt! Vitae, labore error at
                  laborum magnam dolor, inventore optio perspiciatis, iure
                  accusantium sit itaque fugiat aliqu0 illo debitis obcaecati
                  repudiandae saepe! Necessitatibus nam nihil aperiam ipsa
                  asperiores voluptatibus deserunt 0.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProductus;
