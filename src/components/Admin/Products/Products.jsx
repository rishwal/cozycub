import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import { dataContext } from '../../Data/Data-object/Data';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const navigate = useNavigate();
    const { data } = useContext(dataContext)

    const [filteredData, setfilteredData] = useState(data);

    const filterByGender = (sex) => {
        const dataAfterFilter = data.filter(data => {
            if (sex == data.sexCategory || sex == 'all')
                return data
        })
        setfilteredData(dataAfterFilter);
    }
    const filterByCategory = (category) => {
        const dataAfterFilter = data.filter(data => {
            if (category == data.category || category == 'all')
                return data
        })
        setfilteredData(dataAfterFilter);
    }
    const filterByPrice = (price) => {
        const dataAfterFilter = filteredData.filter(data => {
            if (price >= data.offerprice || price == 0)
                return data
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

                <div className="row " style={{justifyContent:'flex-start'}}>
                    {filteredData.map(data => <div className="col-6 col-md-6 col-lg-3 " key={data.id}>
                        <Card style={{ marginTop: "20px" }} className='card' key={data.id} onClick={() => navigate(`/admin/products/${data.id}`, { replace: 'true' })}>
                            <Card.Img variant="top" src={data.image} className='shop-card-img' />
                            <Card.Body className='shop-card-body'>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text className="shop-card-text">
                                    <span style={{ color: "lightgreen", fontWeight: 'bold' }}> ₹{data.offerprice} </span>
                                    <span style={{ textDecoration: 'line-through' }}>₹{data.price}</span>

                                </Card.Text>
                                <p> {data.description.slice(0, 14)}</p>
                            </Card.Body>
                        </Card>
                    </div>)}


                </div>
            </div>
        </div>
    );
}

export default Products;
