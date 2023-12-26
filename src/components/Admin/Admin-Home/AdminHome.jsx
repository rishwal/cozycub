import React, { useContext, useRef, useState } from 'react';
import { dataContext } from '../../Data/Data-object/Data';
import ListGroup from 'react-bootstrap/ListGroup';
import './AdminHome.css'
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const Admin = () => {
    const { users, adminsignedin } = useContext(dataContext);
    const navigate = useNavigate()



    return (
        <div id='admin-container'>
            {adminsignedin ? <><input type="text" className='search-users' placeholder='Search' style={{ height: '50px', borderRadius: '24px', paddingLeft: '10px' }} />
                <div className="home">

                    <ListGroup as="ul" className='list' >
                        {users.map((user, index) => user.privilage ? <></> : <ListGroup.Item as="li" className='list-items d-flex justify-content-between' onClick={() => navigate(`user-details/${index}`)}>
                            <div className="ms-2 d-flex  " style={{ width: '130px', alignItems: 'center' }}>
                                <img src={user.profile} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                <h5 style={{ marginLeft: '10px' }}>{user.name}
                                    <div style={{ fontWeight: 'normal', fontSize: '12px' }} className="email">{user.email}</div>
                                </h5>

                            </div>

                            <Badge bg="primary" pill style={{ height: '20px', width: '28px' }}>
                                {user.productsPurchased.length}
                            </Badge>

                        </ListGroup.Item>)}

                    </ListGroup>
                </div></> : <h1>You are not allowed to use this page</h1>}
        </div>
    );
}

export default Admin;
