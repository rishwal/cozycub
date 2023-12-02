import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage1, ExampleCarouselImage2, ExampleCarouselImage3 } from './images/ExampleCarouselImage'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dress1 from './images/Products/Clothes/Girl/1-2-years-d-w-59-flora-original-imagnz8xhjxyzg8a.webp'
import dress2 from './images/Products/Clothes/Girl/51bljnQfxrL._SX679_.jpg'
import img from './images/pexels-pixabay-459976.jpg'
import './Home.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../Data/Data-object/Data';


const Home = () => {
    const { data, setData } = useContext(dataContext);

    const navigate = useNavigate()

    return (
        <div id='home'>
            <Carousel fade controls={false} id='carousel' style={{ position: "relative" }}>
                <Carousel.Item className='first-item'>
                    <ExampleCarouselImage2 text="First slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage1 text="Second slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage3 text="Third slide" />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="card-container">

                <Card style={{ bottom: "0px", display: "flex", flexDirection: 'row', justifyContent: 'flex-start' }} className='category-card ' onClick={() => navigate('/product-categories/clothes')}>
                    <div className='card-image' style={{ width: "40%", display: "flex", justifyContent: 'center', alignItems: 'center' }}><Card.Img src={data[39].image} style={{ height: '80%', width: "75%" }} /></div>
                    <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: "start", width: "60%" }}>
                        <Card.Title style={{ fontWeight: "600" }}>Clothes</Card.Title>
                        <Card.Text style={{ textAlign: 'left', fontSize: '12px' }}>
                            Clothes for infants <span className='description-text'>Cozycub where style meets comfort for your little one's everyday moments.</span>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ height: "100%", display: "flex", flexDirection: 'row', justifyContent: 'flex-start' }} className='category-card' onClick={() => navigate('/product-categories/toys')}>
                    <div className='card-image' style={{ width: "40%", display: "flex", justifyContent: 'center', alignItems: 'center' }}><Card.Img src={data[58].image} style={{ height: '80%', width: "75%" }} /></div>
                    <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: "start", width: "60%" }}>
                        <Card.Title style={{ fontWeight: "600" }}>Toys</Card.Title>
                        <Card.Text style={{ textAlign: 'left', fontSize: '12px' }}>
                            Toys for babies <span className='description-text'>From interactive learning toys to cuddly companions, find the perfect playmate for your child. </span>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ height: "100%", display: "flex", flexDirection: 'row', justifyContent: 'flex-start' }} className='category-card' onClick={() => navigate('/product-categories/care')}>
                    <div className='card-image' style={{ width: "40%", display: "flex", justifyContent: 'center', alignItems: 'center' }}><Card.Img src={data[65].image} style={{ height: '80%', width: "75%" }} /></div>
                    <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: "start", width: "60%" }}>
                        <Card.Title style={{ fontWeight: "600" }}>Care</Card.Title>
                        <Card.Text style={{ textAlign: 'left', fontSize: '12px' }}>
                            Care products of premium brands <span className='description-text'>Nurture your baby with love and care using our premium Care Products.</span>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <Card style={{ height: "100%", display: "flex", flexDirection: 'row', justifyContent: 'flex-start' }} className='category-card' onClick={() => navigate('/product-categories/nutrition')}>
                    <div className='card-image' style={{ width: "40%", display: "flex", justifyContent: 'center', alignItems: 'center' }}><Card.Img src={data[71].image} style={{ height: '80%', width: "75%" }} /></div>
                    <Card.Body style={{ display: "flex", flexDirection: 'column', justifyContent: 'start', alignItems: "start", width: "60%" }}>
                        <Card.Title style={{ fontWeight: "600" }}>Nutrition</Card.Title>
                        <Card.Text style={{ textAlign: 'left', fontSize: '12px' }}>
                             Nutritional food products <span className='description-text'>Fuel your baby's growth with our nutritious Baby Food collection at Cozycub. </span>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>


            {/* <section id='products' className='container text-center' style={{ backgroundColor: "aqua", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', }}> */}
            {/* <div className="row " style={{ justifyContent: 'center' }}> */}
            {/*  */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[8].id}`)}> */}
            {/* <Card.Img variant="top" src={data[8].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[8].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/* {data[8].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[22].id}`)}> */}
            {/* <Card.Img variant="top" src={data[22].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[22].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/*  */}
            {/* {data[22].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[26].id}`)}> */}
            {/* <Card.Img variant="top" src={data[26].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[26].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/*  */}
            {/* {data[20].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[30].id}`)}> */}
            {/* <Card.Img variant="top" src={data[30].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[30].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/*  */}
            {/* {data[30].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[16].id}`)}> */}
            {/* <Card.Img variant="top" src={data[16].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[16].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/*  */}
            {/* {data[16].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" > */}
            {/* <Card style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[24].id}`)}> */}
            {/* <Card.Img variant="top" src={data[24].image} style={{ */}
            {/* maxHeight: '300px' */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[0].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/*  */}
            {/* {data[24].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* <!~~ <Button variant="primary">Go somewhere</Button> ~~> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/*  */}
            {/*  */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" id='cards-big'> */}
            {/* <Card className='' style={{ maxWidth: '25rem', height: '100%' }} onClick={() => navigate(`/product/${data[29].id}`)}> */}
            {/* <Card.Img variant="down" src={data[29].image} style={{ */}
            {/* width: '100%', // Make the image fill the container width */}
            {/* height: 'auto', // Maintain the aspect ratio */}
            {/* objectFit: 'cover', */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[29].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/* {data[29].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/*  */}
            {/* <div className="col-4 col-md-3 col-xl-3 cards" id='cards-big' > */}
            {/* <Card className='' style={{ maxWidth: '25rem', height: 'auto' }} onClick={() => navigate(`/product/${data[7].id}`)}> */}
            {/* <Card.Img variant="down" src={data[7].image} style={{ */}
            {/* width: '100%', // Make the image fill the container width */}
            {/* height: 'auto', // Maintain the aspect ratio */}
            {/* objectFit: 'cover', */}
            {/* }} /> */}
            {/* <Card.Body> */}
            {/* <Card.Title className='card-title'>{data[7].name}</Card.Title> */}
            {/* <Card.Text className='cardtext'> */}
            {/* {data[7].description.slice(0, 60)} */}
            {/* </Card.Text> */}
            {/* </Card.Body> */}
            {/* </Card> */}
            {/*  */}
            {/* </div> */}
            {/*  */}
            {/* </div> */}
            {/*  */}
            {/* <div className="row category "> */}
            {/* <div className="col-6 col-md-6 col-lg-3" id='column1' onClick={() => navigate('/product-categories/clothes')} > */}
            {/* <img src={data[19].image} alt="" style={{ width: '100%' }} /> */}
            {/* <h4>Clothes</h4> */}
            {/*  */}
            {/* </div> */}
            {/* <div className="col-6 col-md-6 col-lg-3" id='column2' onClick={() => navigate('/product-categories/care')}> */}
            {/* <img src={data[61].image} alt="" style={{ width: '100%',height:"100%" }} /> */}
            {/* <h4>Care</h4> */}
            {/* </div> */}
            {/* <div className="col-6 col-md-6 col-lg-3" id='column3' onClick={() => navigate('/product-categories/toys')}> */}
            {/* <img src={data[51].image} alt="" style={{ width: '100%' }} /> */}
            {/* <h4>Toys</h4> */}
            {/* </div> */}
            {/* <div className="col-6 col-md-6 col-lg-3" id='column4' onClick={() => navigate('/product-categories/nutrition')}> */}
            {/* <img src={data[71].image} alt="" style={{ width: '100%' }} /> */}
            {/* <h4>Nutrition</h4> */}
            {/* </div> */}
            {/*  */}
            {/* </div> */}
            {/*  */}
            {/*  */}
            {/* <div className='scroll-list '> */}
            {/*  */}
            {/* {data.map(data => <div className="col-4 col-md-4 col-lg-2" key={data.id}> */}
            {/* <img src={data.image} alt={data.name} /> */}
            {/*  */}
            {/* </div>)} */}
            {/* </div> */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/* </section> */}




        </div>
    );
}

export default Home;
