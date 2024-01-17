import React, { useContext, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../Data/Data-object/Data';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignIn = ({ users, isActive, setisActive }) => {

    const userRef = useRef(null)
    const passwordRef = useRef(null)
    const { signedin, setsignedin } = useContext(dataContext)

    const { adminsignedin, setadminsignedin, setproductsPurchased, setcurrentuser, setCart } = useContext(dataContext)
    const navigate = useNavigate()



    const handleSignin = () => {


        if (!userRef.current.value == "") {
            var userobj = users.find(user => (user.name == userRef.current.value.toLowerCase() && user.password == passwordRef.current.value));
            if (userobj) {
                if (userobj.privilage) {
                    setadminsignedin(true);
                    setcurrentuser(userobj);
                    navigate('/admin')
                } else {
                    setcurrentuser(userobj);
                    userobj.cart ? setCart(userobj.cart) : setCart([]);
                    userobj.productsPurchased ? setproductsPurchased(userobj.productsPurchased) : setproductsPurchased([]);

                    setsignedin(true);
                    navigate('/')
                }

            }
            else toast.error("Check your username and password");

        } else {
           toast.error("please fill up");
        }

    }


    return (
        <>

            <div className='form-inputs' style={{ display: 'flex', justifyContent: "space-around", flexDirection: "column", alignItems: 'flex-start' }}>
                <input type="text" placeholder='Username' ref={userRef} />
                <input type="password" placeholder='password' ref={passwordRef} />

                <div style={{ textAlign: "left", backgroundColor: "#ffffffbe", width: "100%", height: "15%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    New user ? <Link onClick={() => setisActive(!isActive)}>Signup</Link>
                </div>

            </div>

            {
                signedin ?
                    <Button className="button" style={{ backgroundColor: "lightgreen" }} onClick={() => navigate('/')}>Sucessfully signed in</Button>
                    : <Button className="button" onClick={handleSignin}><FontAwesomeIcon icon={faUser} className='signup-icon' />SignIn</Button>

            }
        </>
    );
}

export default SignIn;
