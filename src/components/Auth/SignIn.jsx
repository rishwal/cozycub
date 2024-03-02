import React, { useContext, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../Data/Data-object/Data";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const SignIn = ({ users, isActive, setisActive }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signedin, setsignedin } = useContext(dataContext);

  const {
    adminsignedin,
    setadminsignedin,
    setproductsPurchased,
    setcurrentuser,
    setCart,
  } = useContext(dataContext);

  //State for logging in the user
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {

    const Signin = async () => {
      if (emailRef.current.value != null && passwordRef.current.value != null) {

        try {

          const resposne = await axios.post("https://localhost:7293/api/Auth/Login", formData);
          console.log(resposne);

          if (resposne.status == 200) {

            //setting up cookies
            const token = resposne.data.token;
            Cookies.set('token', token);

            setsignedin(true);

            const decodedToken = jwtDecode(token);
            console.log(decodedToken);

            //Get role from user
            const role = Object.values(decodedToken)[2];

            console.log(role);

            if (role === "admin") {
              setadminsignedin(true);
              navigate("/admin");
            }
            else
              navigate("/");

          }
          else if (resposne.status == 400) {
            toast.error("Invalid user name or password !");
          }

        }
        catch (err) {
          console.error("Login failed ,please try Again !", err);
          toast.error("Login failed, please try again");
        }
      }
      else {
        toast.error("Please fill in the username and password!");
      }

    }

    Signin();

  }, [formData]);


  // const handleSignin = () => {

  //   if (!emailRef.current.value == "") {
  //     // var userobj = users.find(
  //     //   (user) =>
  //     //     user.name == emailRef.current.value.toLowerCase() &&
  //     //     user.password == passwordRef.current.value
  //     // );
  //     // if (userobj) {
  //     //   if (userobj.privilage) {
  //     //     setadminsignedin(true);
  //     //     setcurrentuser(userobj);
  //     //     navigate("/admin");
  //     //   } else {
  //     //     setcurrentuser(userobj);
  //     //     userobj.cart ? setCart(userobj.cart) : setCart([]);
  //     //     userobj.productsPurchased
  //     //       ? setproductsPurchased(userobj.productsPurchased)
  //     //       : setproductsPurchased([]);
  //   }


  return (
    <>
      <div
        className="form-inputs"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />

        <div
          style={{
            textAlign: "left",
            backgroundColor: "#ffffffbe",
            width: "100%",
            height: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          New user ? <Link onClick={() => setisActive(!isActive)}>Signup</Link>
        </div>
      </div>

      {signedin ? (
        <Button
          className="button"
          style={{ backgroundColor: "lightgreen" }}
          onClick={() => navigate("/")}
        >
          Sucessfully signed in
        </Button>
      ) : (
        <Button className="button" onClick={() => setformData({
          email: emailRef.current.value,
          password: passwordRef.current.value
        })}>
          <FontAwesomeIcon icon={faUser} className="signup-icon" />
          SignIn
        </Button >
      )}
    </>
  );
};

export default SignIn;
