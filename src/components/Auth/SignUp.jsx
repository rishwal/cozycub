import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import axios from 'axios';

const SignUp = ({ setusers, users }) => {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmpassRef = useRef(null)
  const profileRef = useRef(null)

  const [signedUp, setsignedUp] = useState(false);

  //State for user registration
  const [formData, setformData] = useState({

    userName: "",
    email: "",
    password: ""

  });


  //fetching for registering user
  useEffect(() => {

    const RegisterUser = async () => {
      try {
        if (formData.email != "" && formData.email != "" && formData.password != null) {
          const resposne = await axios.post("https://localhost:7293/api/Auth/Register", formData);
          console.log(resposne);

          setsignedUp(true);
        }
      }
      catch (err) {

        console.error("Registration failed !", err);
      }
    };

    RegisterUser();

    return () => {

    };
  }, [formData]);

  const handleSignup = () => {
    const validateName = (name) => {
      if (name == "") {
        toast.error("Please fill in your name")
        return false
      } else if (users.find(user => user.name === name.toLowerCase())) {
        toast('Sorry User Already exist', {
          icon: '👤',
        });
        return false;

      } else return true;
    }

    const validateEmail = (email) => {
      const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (email == "" || emailRegExp.test(email) == false) {
        toast.error('Enter a valid Email', {
          icon: '✉️',
        });
        return false
      }
      else {
        return true
      }
    }

    const validatePass = (pass, confirmpass) => {
      if (pass == "") {
        toast("Please fill in password field", { icon: '🔑' })
      }
      else if (pass.length < 8) {
        toast.error("Password must contain 8 characters")
        return false;
      }
      else if (pass !== confirmpass) {
        toast("passwords doesnt match", { icon: '👎🏻' })
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
            productsPurchased: [],

          }])
        };


        reader.readAsDataURL(file);
      }


      setformData(
        {

          userName: nameRef.current.value.toLowerCase(),
          email: emailRef.current.value,
          password: passwordRef.current.value,

        }
      );


      //Setting users 

      // setusers([...users, {
      //   name: nameRef.current.value.toLowerCase(),
      //   email: emailRef.current.value,
      //   password: passwordRef.current.value,
      //   profile: null,
      //   cart: [],
      // }])



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