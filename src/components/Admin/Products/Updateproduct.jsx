import React, { useContext, useRef, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../../Data/Data-object/Data';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Cookies from 'js-cookie';

const Updateproduct = () => {
    const navigate = useNavigate();
    const { adminsignedin } = useContext(dataContext);
    const [modalShow, setModalShow] = useState(false);

    //state for storing category
    const [category, setcategory] = useState([]);

    //State for storing the data 
    const [data, setdata] = useState([]);

    const [categoryId, setcategoryId] = useState(0);

    //Selecting category
    const handleSelectChange = (e) => {
        setcategoryId(e.target.value);
    };

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const offerpriceRef = useRef(null);
    const priceRef = useRef(null);
    const imageRef = useRef(null);

    let { id } = useParams();
    id = parseInt(id)


    //Getting the token
    const authToken = Cookies.get('token');

    useEffect(() => {

        const fetchProduct = async () => {

            try {
                //Definiig the absortcontroller
                const abortController = new AbortController();
                const signal = abortController.signal;

                //Fetching indivitual produc
                const res = await axios.get(`https://localhost:7293/api/Product/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    },
                    // signal
                });
                setdata(res.data);

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

        const fetchCategory = async () => {
            try {
                const res = await axios.get(`https://localhost:7293/api/Category`, {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    },
                    // signal
                });
                console.log(res.data);

                setcategory(res.data);



            }
            catch (err) {

            }
        }

        fetchCategory();

        fetchProduct();

        return () => {

        };
    }, []);

    const deleteItem = async () => {
        try {
            const res = await axios.delete(`https://localhost:7293/api/Product/${id}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateItem = async () => {

        const file = imageRef.current.files[0]

        const reader = new FileReader();

        reader.onloadend = () => {
            const dataURL = reader.result;

            // const updateItem = {
            //     id: data.id,
            //     name: nameRef.current.value,
            //     description: descriptionRef.current.value !== '' ? descriptionRef.current.value : data.description,
            //     category: (data.category ? data.category : ''),
            //     sexCategory: (data.gender ? data.gender : ''),
            //     offerprice: offerpriceRef.current.value,
            //     price: priceRef.current.value,
            //     image: dataURL,
            //     qty: data.Quantity,
            // }



        };

        try {

            console.log(typeof (dataURL));

            const formData = new FormData();
            formData.append("name", nameRef.current.value);
            formData.append("description", descriptionRef.current.value !== '' ? descriptionRef.current.value : data.description);
            formData.append("category", (data.category ? data.category : ''));
            formData.append("gender", (data.gender ? data.gender : ''));
            formData.append("offeriPrce", offerpriceRef.current.value);
            formData.append("price", priceRef.current.value);
            formData.append("categoryId", categoryId);
            formData.append("image", file);

            const res = await axios.put(`https://localhost:7293/api/Product/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'

                },
            });

        }
        catch (err) {
            console.log(err);
        }



        reader.readAsDataURL(file);
    }

    return (
        <div style={{ height: 'auto', display: 'flex', justifyContent: "center", height: "100vh", alignItems: "center" }}>
            {adminsignedin ? <>{data ? <section id='main'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 img-column">
                            <Card className='card'>
                                <label htmlFor="chooseImg" style={{ height: "100%" }}>Click to choose image <Card.Img variant="top" src={data.productImage} className='card-image' style={{ cursor: "pointer" }} /> </label>
                                <input type="file" ref={imageRef} id='chooseImg' style={{ display: 'none' }} />
                                <Card.Body style={{ display: 'flex' }} id='product-card-body'>
                                    <Button variant='primary col-4 ' onClick={updateItem} >UPDATE</Button>
                                    <Button variant='primary col-4 ' onClick={deleteItem}>DELETE</Button>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-12 col-md-6 col-lg-8 text-column">

                            <div className='text-column-container' style={{ marginTop: '20px' }}>

                                <input type="text" style={{ height: '60px' }} defaultValue={data.productName} ref={nameRef} /> <br />

                                <h2>Select a Category</h2>
                                <select value={categoryId} onChange={handleSelectChange}>
                                    <option value="">Select an option</option>
                                    {category.map(item => <option value={item.id}>{item.name}</option>)}

                                </select>
                                <p>Selected option: {categoryId}</p>

                                <input type='text' className='price' defaultValue={data.offerPrice} style={{ marginTop: '10px' }} ref={offerpriceRef} />
                                <input type='text' defaultValue={data.price} ref={priceRef} /> <br /><br />

                                <textarea style={{ height: '280px', width: '100%' }} defaultValue={data.productDescription} ref={descriptionRef} />


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
                            'Item added to cart
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>

                    </Modal.Body>
                    <Modal.Footer style={{ display: "flex", justifyContent: 'center' }}>
                        <Button onClick={() => updateItem()}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </section > : navigate('/admin/products')}</> : <h1>Access denied</h1>}
        </div>
    );
}

export default Updateproduct;
