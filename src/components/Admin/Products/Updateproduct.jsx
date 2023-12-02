import React, { useContext, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext } from '../../Data/Data-object/Data';
import Modal from 'react-bootstrap/Modal';

const Updateproduct = () => {
    const navigate = useNavigate();
    const { data, setdata, adminsignedin } = useContext(dataContext);
    const [modalShow, setModalShow] = useState(false);

    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const offerpriceRef = useRef(null);
    const priceRef = useRef(null);
    const imageRef = useRef(null);

    let { id } = useParams();
    id = parseInt(id)

    const dataNow = data.find(data => {
        if (data.id === id) {
            return data
        }
    })

    const deleteItem = () => {
        const deleteindex = data.indexOf(dataNow)
        data.splice(deleteindex, 1)
        setdata([...data])
    }

    const updateItem = () => {
        const updateIndex = data.findIndex(item => item.id === id);

        const file = imageRef.current.files[0]

        const reader = new FileReader();

        reader.onloadend = () => {
            const dataURL = reader.result;

            const updateItem = {
                id: dataNow.id,
                name: nameRef.current.value,
                description: descriptionRef.current.value !== '' ? descriptionRef.current.value : dataNow.description,
                category: (dataNow.category ? dataNow.category : ''),
                sexCategory: (dataNow.sexCategory ? dataNow.sexCategory : ''),
                offerprice: offerpriceRef.current.value,
                price: priceRef.current.value,
                image: dataURL,
                qty: dataNow.qty,
            }

            const updateArry = [...data];
            updateArry[updateIndex] = updateItem;

            setdata(updateArry)

        };

        reader.readAsDataURL(file);
    }

    return (
        <div style={{height:'auto',display:'flex',justifyContent:"center",height:"100vh",alignItems:"center"}}>
            {adminsignedin ? <>{dataNow ? <section id='main'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 img-column">
                            <Card className='card'>
                                <label htmlFor="chooseImg" style={{height:"100%"}}>Click to choose image <Card.Img variant="top" src={dataNow.image} className='card-image' style={{cursor:"pointer"}}/> </label>
                                <input type="file" ref={imageRef} id='chooseImg' style={{display:'none'}}/>
                                <Card.Body style={{ display: 'flex' }} id='product-card-body'>
                                    <Button variant='primary col-4 ' onClick={updateItem} >UPDATE</Button>
                                    <Button variant='primary col-4 ' onClick={deleteItem}>DELETE</Button>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="col-12 col-md-6 col-lg-8 text-column">

                            <div className='text-column-container' style={{marginTop:'20px'}}>

                                <input type="text" style={{ height: '60px' }} defaultValue={dataNow.name} ref={nameRef} /> <br />

                                <input type='text' className='price' defaultValue={dataNow.offerprice} style={{ marginTop: '10px' }} ref={offerpriceRef} />
                                <input type='text' defaultValue={dataNow.price} ref={priceRef} /> <br /><br />

                                <textarea style={{ height: '280px', width: '100%' }} defaultValue={dataNow.description} ref={descriptionRef} />


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
                        <Button>Update</Button>
                    </Modal.Footer>
                </Modal>
            </section > : navigate('/admin/products')}</> : <h1>Access denied</h1>}
        </div>
    );
}

export default Updateproduct;
