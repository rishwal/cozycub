import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import dress1 from '../Home/images/Products/Clothes/Girl/3-6-months-bb-mus-frk23-candy-the-boo-boo-club-original-imagrvmggzzvzy7f.webp'
import { useNavigate, useParams } from 'react-router-dom';
import './category.css'
import { dataContext } from '../Data/Data-object/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";




const Categories = () => {

    const navigate = useNavigate()
    const { data } = useContext(dataContext)

    const { type } = useParams()
    console.log(type);
    const categoryArray = data.filter(data => {
        if (data.category == type) {
            return data
        }
    })

    console.log(categoryArray);

    return (
        <div className='container' id='container'>
            <br />
            <div className="row " style={{ justifyContent: 'start' }}>
                {categoryArray.map(data => <div className="col-12 col-md-6 col-xl-3 cards" key={data.id} onClick={() => navigate(`/product/${data.id}`, { replace: "true" })}>
                    <Card style={{ display: "flex", justifyContent: 'center', marginBottom: "30px"  }} className='product-card'>

                        <Card.Img
                            src={data.image}
                            position="top"
                            alt="Laptop"
                            style={{ width: '80%', height: "52%", alignSelf: 'center', marginTop: '30px' }}
                        />
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <p className="small">
                                    <a href="#!" className="text-muted">
                                        {data.category}
                                    </a>
                                </p>
                                <p className="small text-danger">
                                    <s>₹{data.price}</s>
                                </p>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <h5 className="mb-0">{data.name.slice(0,16)}</h5>
                                <h5 className="text-dark mb-0">₹{data.offerprice}</h5>
                            </div>

                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">
                                   {data.description.slice(0,8)}
                                </p>
                                <div class="ms-auto text-warning">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>


                </div>)}

            </div>
        </div>
    );
}

export default Categories;
