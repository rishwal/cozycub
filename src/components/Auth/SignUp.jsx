import React, { useReducer, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const SignUp = ({ setusers, users }) => {

    console.log(users);
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmpassRef = useRef(null)
    const profileRef = useRef(null)

    const [signedUp, setsignedUp] = useState(false);

    const handleSignup = () => {
        const validateName = (name) => {
            if (name == "") {
                alert("Please fill in your name");
                return false
            } else if (users.find(user => user.name === name.toLowerCase())) {
                alert("user already exists")
                return false;

            } else return true;
        }

        const validateEmail = (email) => {
            const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (email == "" || emailRegExp.test(email) == false) {
                window.alert("Enter valid email")
                return false
            }
            else {
                return true
            }
        }

        const validatePass = (pass, confirmpass) => {
            if (pass == "") {
                alert("Please fill in password field")
            }
            else if (pass.length < 8) {
                alert("Password must contain 8 characters")
                return false;
            }
            else if (pass !== confirmpass) {
                alert("passwords doesnt match")
                return false;
            }
            else {
                return true;
            }
        }

        if (validateName(nameRef.current.value) && validateEmail(emailRef.current.value) && validatePass(passwordRef.current.value, confirmpassRef.current.value)) {


            if (profileRef.current.files[0]) {
                const file = profileRef.current.files[0];

                const reader = new FileReader();

                reader.onloadend = () => {
                    const dataURL = reader.result;

                    setusers([...users, {
                        name: nameRef.current.value.toLowerCase(),
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                        profile: dataURL,
                        cart: [],
                        productsPurchased:[],
                        
                    }])
                };


                reader.readAsDataURL(file);
            }

            setusers([...users, {
                name: nameRef.current.value.toLowerCase(),
                email: emailRef.current.value,
                password: passwordRef.current.value,
                profile: null,
                cart: [],
            }])

            setsignedUp(true)

        }




    }



    return (
        <>

            <div className='form-inputs' style={{ display: 'flex', flexDirection: "column", justifyContent: "space-between" }}>
                <input type="text" placeholder='Username' ref={nameRef} />
                <input type="text" placeholder='Email' ref={emailRef} />

                <input type="password" placeholder='password' ref={passwordRef} />
                <input type="password" placeholder='Confirm password' ref={confirmpassRef} />
                <label htmlFor="profile">Upload profile picture</label>
                <input type="file" id='profile' name='profile' ref={profileRef} />

            </div>
            {
                signedUp ?
                    <Button variant='success' onClick={handleSignup} style={{ height: "12% ", borderRadius: "10px" }}>Registration Successful</Button>
                    : <Button className="button" onClick={handleSignup}><FontAwesomeIcon icon={faUserPlus} className='signup-icon' />Signup</Button>

            }


        </>
    );
}

export default SignUp;
