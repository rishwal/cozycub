import React, { useContext } from 'react';
import './Userdetails.css';
import Table from 'react-bootstrap/Table';
import { dataContext } from '../../Data/Data-object/Data';
import { useParams } from 'react-router-dom';

const Userdetails = () => {
    const { users } = useContext(dataContext);

    let { id } = useParams();
    id = Number(id);

    return (
        <div id='Userdetails-container' >
            <h1>User Purchase details</h1>
            <Table striped bordered hover size="sm" className="table">
                <thead >
                    <tr>
                        <th>p no</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {users[id].productsPurchased.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.offerprice}</td>
                        <td>{item.qty}</td>
                    </tr>)}

                </tbody>
            </Table>
        </div>
    );
}

export default Userdetails;
