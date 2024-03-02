import React, { useContext, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Token } from '@mui/icons-material';
import Cookies from 'js-cookie';


const Products = () => {
    const navigate = useNavigate();

    const [data, setata] = useState([]);

    //Getting token 
    const authToken = Cookies.get('token');

    //State for filtering Data
    const [filteredData, setfilteredData] = useState([]);

    useEffect(() => {

        //Definiig the absortcontroller
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchProducts = async () => {
            try {
                const res = await axios.get(`https://localhost:7293/api/Product`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    },
                    signal,
                });
                setata(res.data);
                setfilteredData(res.data);

                console.log(res.data);
            }
            catch (error) {

                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    console.error('Error fetching data:', error);
                }
            }
        }

        fetchProducts();

        return () => {
            // Cancelling the fetch request.
            // abortController.abort();
        }

    }, []);





    const filterByGender = (sex) => {
        const dataAfterFilter = data?.filter(data => {
            if (sex == data.gender || sex == 'all')
                return data;
        })
        setfilteredData(dataAfterFilter);
    }
    const filterByCategory = (category) => {
        const dataAfterFilter = data?.filter(data => {
            if (category == data.category || category == 'all')
                return data;
        })
        setfilteredData(dataAfterFilter);
    }

    //By category
    const filterByPrice = (price) => {
        const dataAfterFilter = filteredData?.filter(data => {
            if (price >= data.offerPrice || price == 0)
                return data;
        })
        setfilteredData(dataAfterFilter);
    }

    return (
        <div id='parent-div'>
            <div className="filter-container container">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Gender
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => filterByGender('all')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByGender('boy')}>Boys</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByGender('girl')}>Girls</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Product
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => filterByCategory('all')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByCategory('nutrition')}>Nutrition</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByCategory('care')}>Care</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByCategory('clothes')}>Clothes</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByCategory('toys')}>Toys</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Price
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => filterByPrice(0)}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByPrice(300)}>Under 300</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByPrice(500)}>Under 500</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterByPrice(1000)}>Under 1000</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="container item-container">

                <div className="row " style={{ justifyContent: 'flex-start' }}>
                    {filteredData?.map((data, index) => <div className="col-6 col-md-6 col-lg-3 " key={index}>
                        <Card style={{ marginTop: "20px" }} className='card' key={data.id} onClick={() => navigate(`/admin/products/${data.id}`, { replace: 'true' })}>
                            <Card.Img variant="top" src={data.productImage} className='shop-card-img' />
                            <Card.Body className='shop-card-body'>
                                <Card.Title>{data.productName}</Card.Title>
                                <Card.Text className="shop-card-text">
                                    <span style={{ color: "lightgreen", fontWeight: 'bold' }}> ₹{data.offerprice} </span>
                                    <span style={{ textDecoration: 'line-through' }}>₹{data.price}</span>
                                </Card.Text>
                                <p> {data?.productDescription?.slice(0, 14)}</p>
                            </Card.Body>
                        </Card>
                    </div>)

                    }


                </div>
            </div>
        </div>
    );
}

export default Products;
