import React, { useContext } from 'react';
import Data, { dataContext } from '../Data/Data-object/Data';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Signout = () => {
    const { cart, setCart, productsPurchased, setproductsPurchased, setsignedin, currentuser, setcurrentuser, setusers, users, adminsignedin ,setadminsignedin} = useContext(dataContext);

    const handlesignout = () => {

        const updatedUsers = users.map(user => {
            if (user == currentuser) {
                user.cart = cart;
                user.productsPurchased = productsPurchased;
                return user;
            }
            return user;
        })

        setusers(updatedUsers);

        setcurrentuser(null);
        setCart([]);
        setproductsPurchased([]);
        setsignedin(false);
        setadminsignedin(false);
    }

    return (
        <div style={{ height: '100%' }}>
            {adminsignedin ? <h1>Admin info</h1> : <h1>User info</h1>}
            <div className='form-inputs' style={{ display: 'flex', justifyContent: "space-between", flexDirection: "column", alignItems: 'flex-start' }}>
                <label htmlFor="username">username</label>
                <input type="text" id='username' value={`${currentuser.name}`}  disabled />
                <label htmlFor="username">email</label>
                <input type="email" id='email' value={`${currentuser.email}`} disabled />
                <label htmlFor="username">password</label>
                <input type="password" id='password' value={`${currentuser.password}`} disabled />

            </div>


            <Button className="button" style={{ width: '200px', marginTop: '40px' }} onClick={() => handlesignout()}>Log Out</Button>
        </div>
    );
}

export default Signout;
