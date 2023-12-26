import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './viewproducts.css'
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../Data/Data-object/Data';
import Modal from 'react-bootstrap/Modal';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";




const ViewProductus = () => {
    const { data, cart, setCart, setBuynow, signedin } = useContext(dataContext)
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate()

    let { id } = useParams();
    id = parseInt(id)

    const dataNow = data.find(data => {
        if (data.id === id) {
            return data
        }
    })

    const addToCart = (dataNow) => {
        if (signedin) {
            if (cart.includes(dataNow)) {
                const item = cart.find(val => {
                    if (val == dataNow) {
                        return val;
                    }
                })

                item.qty++;
            }
            else {
                setCart([...cart, dataNow])
            }
        }
        setModalShow(true)
    }

    const buyNow = (dataNow) => {
        if (signedin) {
            navigate('/buy')
            setBuynow(dataNow)
        }
        else {
            setModalShow(true)
        }

    }

    const starfill=<FaStar style={{color:'orange',marginRight:'2px'}} />;
    const star= <FaRegStar style={{color:'orange',marginRight:'2px'}}/>;
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
        <section id='main'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 img-column " >
                        <Card className='card d-flex' style={{alignItems:"center"}}>
                            <Card.Img variant="top" src={dataNow.image} className='card-image' />
                            <Card.Body style={{ display: 'flex', }} id='product-card-body'>
                                <Button variant='primary col-4 ' onClick={() => addToCart(dataNow)}>Add to Cart</Button>
                                <Button variant='primary col-4 ' onClick={() => buyNow(dataNow)}>Buy Now</Button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-12 col-md-6 col-lg-8 text-column">

                        <div className='text-column-container'>

                            <h2>{dataNow.name}</h2>

                            {printRating(dataNow.rating)}
                            <h2 className='price'>₹{dataNow.offerprice}<span style={{ marginLeft: '10px' }}>₹{dataNow.price}</span></h2>

                            <h3>{dataNow.description}</h3>

                            <span>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore eaque eius molestiae, quisquam tenetur laboriosam aliqu0 blanditiis sunt pariatur porro voluptatibus quaerat cup0itate natus harum? Cumque 0 exercitationem sapiente maxime.
                                    Nam totam explicabo ipsam laboriosam autem eum porro, debitis corrupti non rem sit neque voluptates omnis ex deleniti consequatur est, 0 voluptatum unde. Ut voluptatibus alias vel, praesentium dolorum inc0unt!
                                    Vitae, labore error at laborum magnam dolor, inventore optio perspiciatis, iure accusantium sit itaque fugiat aliqu0 illo debitis obcaecati repudiandae saepe! Necessitatibus nam nihil aperiam ipsa asperiores voluptatibus deserunt 0.
                                   

                                </p>
                            </span>



                        </div>

                    </div>
                </div>

            </div>

            <Modal
                show={modalShow}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onClick={() => setModalShow(false)}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {signedin ? 'Item added to cart' : 'Please login'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
                    <h4>{signedin ? 'Cart updated' : 'Use should login to add items to cart'}</h4>
                </Modal.Body>
                <Modal.Footer style={{ display: "flex", justifyContent: 'center' }}>
                    <Button onClick={() => { signedin ? navigate('/cart') : navigate('/login') }}>{signedin ? 'Goto cart' : 'Goto Login'}</Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default ViewProductus;
