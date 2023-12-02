import React, { useState } from 'react';
import './AdminNav.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaArrowRight } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AdminNavbar = () => {
    const [navbarstyle, setnavbarstyle] = useState(null);
    const navigate = useNavigate()

    const showNav = () => {
        const newstyle = (navbarstyle ? null : { left: '0px', position: 'relative' });
        console.log(navbarstyle);
        setnavbarstyle(newstyle);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div id='admin-nav-container'>

            
            <FaArrowRight onClick={handleShow} size={'1.5rem'} style={{ position: 'absolute', left: '0', top: "100px" }} />

            <Offcanvas variant="secondary" show={show} onHide={handleClose} id="side-nav" style={{ backgroundColor: "#36454f", width: "250px", color: 'white' }}>
                <Offcanvas.Header className="custom-offcanvas-header">
                    <Offcanvas.Title><h2>Admin</h2></Offcanvas.Title>
                </Offcanvas.Header >
                <Offcanvas.Body className='nav-body'>
                    <div className="users" onClick={() => navigate('/admin')}>
                        <FaUserCircle className='icons' />
                        <h5>Users</h5>
                    </div>
                    <div className="products" onClick={() => navigate('products')}>
                        <FaListUl className='icons' />
                        <h5>Products</h5>
                    </div>
            
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default AdminNavbar;
