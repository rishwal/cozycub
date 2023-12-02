import React, { useContext, useState } from 'react';
import './Cart.css'
import { dataContext } from '../Data/Data-object/Data';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const Cart = () => {

    const navigate = useNavigate()

    const {  cart, setCart, signedin } = useContext(dataContext);
    const sum = cart.reduce((prev, item) => {
        return (item.offerprice) * (item.qty) + prev;
    }, 0)
    const sumBefore = cart.reduce((prev, item) => {
        return (item.price) * (item.qty) + prev;
    }, 0)


    const [totalBefore, settotalBefore] = useState(sumBefore)
    const [total, setTotal] = useState(sum);




    const incrementQty = (item) => {
        if (item.qty < 10) {
            item.qty = item.qty + 1;
            setCart([...cart])
            const sum = cart.reduce((prev, item) => {
                return (item.offerprice) * (item.qty) + prev;
            }, 0)
            const sumBefore = cart.reduce((prev, item) => {
                return (item.price) * (item.qty) + prev;
            }, 0)
            settotalBefore(sumBefore)
            setTotal(sum)
        }
    }
    const decrementQty = (item) => {
        if (item.qty > 1) {
            item.qty = item.qty - 1;
            const sum = cart.reduce((prev, item) => {
                return (item.offerprice) * (item.qty) + prev;
            }, 0)
            setTotal(sum)
            const sumBefore = cart.reduce((prev, item) => {
                return (item.price) * (item.qty) + prev;
            }, 0)
            settotalBefore(sumBefore)
        }

    }
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        setCart([...cart])
    }



    return (

        <div className="container-fluid cart-container">

            <h1>Cart</h1>
            <div className="row">

                <div className="col-lg-8 columns">

                    {signedin ?


                        cart.length >= 1 ?
                            cart.map((item, index) =>
                                <div className="row items">
                                    <div className="col-12 col-md-3 image-container" style={{height:'100%'}} >
                                        <img src={item.image} alt="" />
                                        <div className="description-container">
                                            <h3>{item.name}</h3>
                                            <p>${item.offerprice} <span>{item.price}</span></p>
                                            <p>{item.description.slice(0,10)}</p>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="col-12 col-md-9 button-container">

                                        <div className="detail-container">
                                            <h3>{item.name}</h3>
                                            <h5>${item.offerprice} <span>{item.price}</span></h5>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="increment-container">
                                            <span> <button onClick={() => decrementQty(item)} className='decrementBtn'>-</button>
                                                <input type="text" style={{ width: '40px', textAlign: 'center' }} value={item.qty} />
                                                <button onClick={() => incrementQty(item)} className='incrementBtn'>+</button>
                                            </span>
                                            <MdOutlineRemoveShoppingCart size={25} onClick={() => removeFromCart(index)} style={{cursor:'pointer'}} />


                                            {/* <button className='remove' >Remove</button> */}
                                        </div>

                                    </div>
                                </div>
                            ) :

                            <div className="empty-container">
                                <h1>Cart Empty</h1>
                                <button onClick={() => navigate('/shop')}>Go to shop</button>

                            </div>
                        :

                        <div className="empty-container">
                            <h1>Please Login...</h1>
                            <button onClick={() => navigate('/login')} className='gotoLogin'>Go to Login</button>

                        </div>


                    }

                </div>

                {
                    signedin?
                cart.length >= 1 ? <div className="col-lg-4 columns total-column" >
                    <div className="total">
                        <h2>Price details</h2>
                        <div className="price-details">
                            <div>
                                <span>
                                    <h4>Actual Price</h4>
                                    <h4>{totalBefore}</h4>
                                </span>
                                <span>
                                    <h4>Discount Price</h4>
                                    <h4>{total}</h4>
                                </span>
                                <span>
                                    <h4>Savings </h4>
                                    <h4>{totalBefore - total}</h4>
                                </span>
                            </div>
                            <span>
                                <h3>Total</h3>
                                <h3>{total}</h3>
                            </span>



                        </div>

                    </div>
                </div> : <></>
                :null}
            </div>

            {cart.length >= 1 ?
                <>
                    <div className="place-order">
                        <button onClick={()=>navigate('/payment')}>
                            place order
                        </button>
                    </div>

                </>
                :
                <></>
            }

        </div>

    );
}

export default Cart;
