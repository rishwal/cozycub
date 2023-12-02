import React, { useContext, useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { dataContext } from '../../Data/Data-object/Data';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import './CreateProduct.css'
import { useNavigate } from 'react-router-dom';


const CreateProduct = () => {

    const { data, adminsignedin } = useContext(dataContext);
    const navigate = useNavigate()

    const nameRef = useRef(null)
    const productCategoryRef = useRef(null)
    const genderCategoryRef = useRef(null)
    const descriptionRef = useRef(null)
    const offerpriceRef = useRef(null)
    const priceRef = useRef(null)
    const imageRef = useRef(null)
    const [modalShow, setModalShow] = useState(false);
    const [flag, setflag] = useState(true);
    const [exists, setexists] = useState(false);




    const handlesubmit = (e) => {
        e.preventDefault();
        document.getElementById("productForm").reset();
        setModalShow(false)

    }

    const handleCreate = () => {
        if (nameRef.current.value === '' || productCategoryRef.current === "" || genderCategoryRef.current.value === "" || descriptionRef.current.value === '' || offerpriceRef.current.value === "" || priceRef.current.value === "" || imageRef.current.value === "") {
            setModalShow(true)
            setflag(false)
        } else {


            const file = imageRef.current.files[0];


            const reader = new FileReader();



            reader.onloadend = () => {
                const dataURL = reader.result;

                data.forEach(item => {
                    if (item.name === nameRef.current.value) {
                        setflag(false)
                        setexists(true)
                        setModalShow(true)
                    }
                })

                if (!exists) {
                    setflag(true);
                    setModalShow(true);

                    data.push({
                        id: data.length + 1,
                        name: nameRef.current.value,
                        category: productCategoryRef.current,
                        sexCategory: genderCategoryRef.current.value,
                        description: descriptionRef.current.value,
                        offerprice: Number(offerpriceRef.current.value),
                        price: Number(priceRef.current.value),
                        image: dataURL,
                        qty: 1,

                    })


                }
            };


            reader.readAsDataURL(file);

        }



    }



    return (
        <div id='createProduct' >


            {adminsignedin ?
                <div className="container" >
                    <Modal
                        show={modalShow}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton onClick={() => setModalShow(false)} >
                            <Modal.Title id="contained-modal-title-center">
                                {flag ? 'Product created successfully' : exists ? 'Product already exists' : 'Please fill all the fields'}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Footer style={{ display: "flex", justifyContent: 'center' }}>
                            {flag ? <Button onClick={() => { navigate('/admin/products') }}>See product</Button> : <Button onClick={(e) => handlesubmit(e)}>Clear form</Button>}
                        </Modal.Footer>
                    </Modal>




                    <div className="create-product-container">


                        <form onSubmit={e => handlesubmit(e)} id='productForm'>

                            <h2>Add a product</h2>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Product Id"
                                className="mb-3"
                            >
                                <Form.Control type="text" value={data.length + 1} placeholder="Enter your name" readOnly />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"

                            >
                                <Form.Control type="text" placeholder="Enter your name" ref={nameRef} />
                            </FloatingLabel>
                            <InputGroup>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Offerprice"
                                    className="mb-3"

                                >
                                    <Form.Control type="number" min={10} ref={offerpriceRef} />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Price"
                                    className="mb-3"
                                >
                                    <Form.Control type="number" ref={priceRef} min={10} />
                                </FloatingLabel>
                            </InputGroup>


                            <InputGroup className="mb-3" style={{ display: "flex", justifyContent: 'space-around' }}>


                                <Form onChange={(e) => genderCategoryRef.current.value = e.target.id} style={{ display: 'flex', width: "100%", justifyContent: 'space-around' }}>

                                    <label htmlFor="genderCategory" style={{ color: 'white' }}>GenderCategory</label>
                                    <Form.Check // prettier-ignore
                                        type='radio'
                                        id={`boy`}
                                        label={`boy`}
                                        className="genderCategory"
                                        name="genderCategory"
                                        ref={genderCategoryRef}
                                    />
                                    <Form.Check // prettier-ignore
                                        type='radio'
                                        id={`girl`}
                                        label={`girl`}
                                        className="genderCategory"
                                        name="genderCategory"
                                        ref={genderCategoryRef}

                                    />
                                    <Form.Check // prettier-ignore
                                        type='radio'
                                        id={`null`}
                                        label={`null`}
                                        className="genderCategory"
                                        name="genderCategory"
                                        ref={genderCategoryRef}
                                    />
                                </Form>
                            </InputGroup>
                            <Form.Select aria-label="product-category" className='mb-3' onChange={(e) => productCategoryRef.current = e.target.value} >
                                <option value="null">Product Category </option>
                                <option value="Cloth">cloth </option>
                                <option value="toy">toy</option>
                                <option value="care">care</option>
                                <option value="nutrition">nutrition</option>
                            </Form.Select>


                            <textarea name="productDescription" id="productDescription" cols="100" rows="5" placeholder='product description' style={{ width: '100%', padding: '10px' }} ref={descriptionRef}></textarea>

                            <input type="file" name="image" id="productImage" ref={imageRef} />
                        </form>

                        <Button style={{ width: '200px', alignSelf: 'center', marginTop: "30px" }} onClick={handleCreate} >Create product</Button>

                    </div>



                </div> : <h1>Acess denied</h1>}
        </div>
    );
}

export default CreateProduct;

