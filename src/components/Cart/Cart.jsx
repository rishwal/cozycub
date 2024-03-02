import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { dataContext } from "../Data/Data-object/Data";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";

const Cart = () => {
  const navigate = useNavigate();


  const [actualTotal, setActualtotal] = useState(0);
  const [total, setTotal] = useState(0);

  //State for storing cart items
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const authToken = Cookies.get('token');
      const res = await axios.get("https://localhost:7293/api/Cart/GetCartItems", {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
      })
      console.log(res.data);

      setCart(res.data);
      const actualTotal = res.data.reduce((prev, curr) => prev + curr.price, 0);
      setActualtotal(actualTotal);
      console.log(actualTotal);


    }

    fetchCart();

  }, []);


  //Fundtions for incrementing 

  const handleIncrement = async (productId) => {
    try {
      const authToken = Cookies.get('token');
      const res = await axios.get(`https://localhost:7293/api/Cart/increment-quantity?productId=${productId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
      });
      setCart(res.data);


    } catch (error) {
      console.error('Error incrementing quantity:', error);
    }
  };

  const handleDecrement = async (productId) => {

  };


  const removeFromCart = async (productId) => {
   
    try {

      const authToken = Cookies.get('token');
      const res = await axios.delete(`https://localhost:7293/api/Cart/remove-item-from-cart?productId=${productId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
      });
      setCart(res.data);
      console.log(cart);

    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };



  console.log(cart.length);

  const { signedin } = useContext(dataContext);

  // const incrementQty = (item) => {
  //   if (item.qty < 10) {
  //     item.qty = item.qty + 1;
  //     setCart([...cart]);
  //     const sum = cart.reduce((prev, item) => {
  //       return item.offerprice * item.qty + prev;
  //     }, 0);
  //     const sumBefore = cart.reduce((prev, item) => {
  //       return item.price * item.qty + prev;
  //     }, 0);
  //     settotalBefore(sumBefore);
  //     setTotal(sum);
  //   }
  // };
  // const decrementQty = (item) => {
  //   if (item.qty > 1) {
  //     item.qty = item.qty - 1;
  //     const sum = cart.reduce((prev, item) => {
  //       return item.offerprice * item.qty + prev;
  //     }, 0);
  //     setTotal(sum);
  //     const sumBefore = cart.reduce((prev, item) => {
  //       return item.price * item.qty + prev;
  //     }, 0);
  //     settotalBefore(sumBefore);
  //   }
  // };
  // const removeFromCart = (index) => {
  //   cart.splice(index, 1);
  //   setCart([...cart]);
  // };

  return (
    <div className="container-fluid cart-container">
      <h1 style={{ fontFamily: "cursive", paddingTop: "7vh" }}>Cart</h1>
      <div className="row">
        <div className="col-lg-8 columns">
          {signedin ? (
            cart.length > 0 ? (
              cart.map((item, index) => (
                <div className="row items">
                  <div
                    className="col-12 col-md-3 image-container"
                    style={{ height: "100%" }}
                  >
                    <img src={item.image} />
                    <div className="description-container">
                      <h3>{item.productName}</h3>
                      <p>
                        ₹{item.offerPrice}{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: "12px",
                          }}
                        >
                          {item.price}
                        </span>
                      </p>
                      <p>{item.description?.slice(0, 10)}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 button-container">
                    <div className="detail-container">
                      <h3>{item.productName}</h3>
                      <h5>
                        ${item.offerPrice} <span>{item.price}</span>
                      </h5>
                      <p>{item.description}</p>
                    </div>
                    <div className="increment-container">
                      <span>
                        {" "}
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="decrementBtn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          style={{ width: "40px", textAlign: "center" }}
                          value={item.quantity}
                        />
                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="incrementBtn"
                        >
                          +
                        </button>
                      </span>
                      <MdOutlineRemoveShoppingCart
                        size={25}
                        onClick={() => removeFromCart(item.id)}
                        style={{ cursor: "pointer" }}
                      />

                      {/* <button className='remove' >Remove</button> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-container">
                <h1>Cart Empty</h1>
                <button onClick={() => navigate("/shop")}>Go to shop</button>
              </div>
            )
          ) : (
            <div className="empty-container">
              <h1>Please Login...</h1>
              <button onClick={() => navigate("/login")} className="gotoLogin">
                Go to Login
              </button>
            </div>
          )}
        </div>

        {signedin ? (
          cart.length >= 1 ? (
            <div className="col-lg-4 columns total-column">
              <div className="total">
                <h2>Price details</h2>
                <div className="price-details">
                  <div>
                    <span>
                      <h4>Actual Price</h4>
                      <h4>{actualTotal}</h4>
                    </span>
                    <span>
                      <h4>Discount Price</h4>
                      <h4>{total}</h4>
                    </span>
                    <span>
                      <h4>Savings </h4>
                      <h4>{cart[0].totalPrice - total}</h4>
                    </span>
                  </div>
                  <span>
                    <h3>Total</h3>
                    <h3>{cart[0].totalPrice}</h3>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )
        ) : null}
      </div>

      {cart.length >= 1 ? (
        <>
          <div className="place-order">
            <button onClick={() => navigate("/payment")}>place order</button>
          </div>
        </>
      ) : (
        <></>
      )}
      {signedin && (
        <h2 style={{ paddingTop: "40vh", fontFamily: "cursive" }}>
          Happy shopping.
        </h2>
      )}
    </div>
  );
};

export default Cart;
