import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { dataContext } from '../Data/Data-object/Data';
import Card from 'react-bootstrap/Card';
import './Buynow.css'
import { useNavigate } from 'react-router-dom';


const BuyNow = () => {

    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);

    const { Buynow, productsPurchased, setproductsPurchased } = useContext(dataContext);



    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        setproductsPurchased([...productsPurchased, Buynow])
    };

    return (
        <div id='payment-container' style={{height:"auto"}}>
            <div className="container" >
                <div className="row" style={{alignSelf:'center',height:"100vh"}}>
                    <div className="col-lg-9">
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='form' >

                            <Row className="mb-3 row" style={{ display: 'flex', justifyContent: 'center' }}>
                                <h3>Payment section</h3>
                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        className='input'

                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        className='input'
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            className="input"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" required className="input" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="State" required className="input" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip" required className="input" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                                <Form.Select aria-label="Default select example">
                                    <option>Select Payment type</option>
                                    <option value="1">Debit card</option>
                                    <option value="2">Upi</option>
                                    <option value="3">Credit card</option>
                                    <option value="3">Cash on delivery</option>
                                </Form.Select>
                            </Form.Group>

                            <Button type="submit" onClick={() => setproductsPurchased([...productsPurchased, Buynow])}>Place order</Button>
                        </Form>
                    </div>

                    <div className="col-lg-3" style={{justifySelf:"center"}}>
                        <Card style={{ width: '18rem', marginTop: "100px" }} onClick={() => navigate(`/product/${Buynow.id}`, { replace: 'true' })} key={Buynow.id}>
                            <Card.Img variant="top" src={Buynow.image} style={{ height: '50%', width: '100%' }} />
                            <Card.Body>
                                <Card.Title>{Buynow.name}</Card.Title>
                                <Card.Title>{Buynow.offerprice}</Card.Title>
                                <Card.Text>
                                    {Buynow.description.slice(0,35)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default BuyNow;
