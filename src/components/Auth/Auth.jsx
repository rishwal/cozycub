import React, { useContext, useState ,useEffect} from "react";
import Button from "react-bootstrap/Button";
import "./Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { dataContext } from "../Data/Data-object/Data";
import Signout from "./Signout";

const Login = () => {
  const [isActive, setisActive] = useState(true);
  const { users, setusers } = useContext(dataContext);
  const { signedin, setsignedin, adminsignedin } = useContext(dataContext);

  return (
    <div id="body">
      <div className="container main">
        <div className="container auth-container ">
          {signedin || adminsignedin ? null : (
            <div className="select-container">
              <Button
                className="button"
                onClick={() => setisActive(!isActive)}
                style={{
                  backgroundColor: isActive ? "#af69ef" : "transparent",
                  color: isActive ? "white" : "#af69ef",
                }}
              >
                <FontAwesomeIcon icon={faUser} className="user-icons" />
                SignIn
              </Button>
              <Button
                className="button"
                onClick={() => setisActive(!isActive)}
                style={{
                  backgroundColor: isActive ? "transparent" : "#af69ef",
                  color: isActive ? "#af69ef" : "white",
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} className="user-icons" />
                Signup
              </Button>
            </div>
          )}
          <div className="form-container">
            <div className="form-container-child">
              <form>
                {signedin || adminsignedin ? (
                  <Signout />
                ) : isActive ? (
                  <SignIn
                    users={users}
                    isActive={isActive}
                    setisActive={setisActive}
                  />
                ) : (
                  <SignUp setusers={setusers} users={users} />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
