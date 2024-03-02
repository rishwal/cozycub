import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { dataContext } from "../Data/Data-object/Data";
import { IoLogOut } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import { CgProfile } from "react-icons/cg";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  const searchText = useRef(null);
  const navigate = useNavigate();

  const {
    cart,
    productsPurchased,
    signedin,
    setusers,
    setCart,
    setproductsPurchased,
    setsignedin,
    setadminsignedin,
    adminsignedin,
    setSearch,
    users,
    currentuser,
    setcurrentuser,
  } = useContext(dataContext);

  const handleSearch = () => {
    setSearch(searchText.current.value);
    navigate("/search");
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handlesignout = () => {
    const updatedUsers = users.map((user) => {
      if (user == currentuser) {
        user.cart = cart;
        user.productsPurchased = productsPurchased;
        return user;
      }
      return user;
    });

    setusers(updatedUsers);

    setcurrentuser(null);
    setCart([]);
    setproductsPurchased([]);
    setsignedin(false);
    setadminsignedin(false);
  };

  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ marginLeft: "10px", fontWeight: "600", fontSize: "" }}
        >
          CozyCub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{
              maxHeight: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              marginLeft: "10px",
            }}
          >
            {adminsignedin ? (
              <>
                <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
                <Nav.Link onClick={() => navigate("admin/create-products")}>
                  Create Products
                </Nav.Link>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/shop")}>Shop</Nav.Link>
              </>
            )}
          </Nav>
          <Form
            className="d-flex"
            style={{ display: "flex", alignItems: "center" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            {adminsignedin ? (
              <></>
            ) : (
              <>
                
                <input type="text" id="nav-search-bar"  ref={searchText}   placeholder="Search"/>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon"
                  onClick={handleSearch}
                  size="xs"
                  style={{ backgroundColor: "white", marginLeft: "-4px",border:'1px solid lightgrey',borderLeft:'none',boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px;"  }}
                />
              </>
            )}
            <Dropdown
              show={isOpen}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown.Toggle
                style={{
                  height: "50px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="dropdown-toggle home-toggle"
              >
                <Navbar.Brand
                  className="d-flex justify-content-evenly align-items-center"
                  style={{ width: "150px" }}
                >
                  <span style={{position:"relative"}}>
                    {adminsignedin ? (
                      <></>
                    ) : (
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        onClick={() => navigate("/cart")}
                        size="sm"
                        style={{
                          padding: "10px",
                          borderRadius: "50%",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                    )}
                    <Badge
                      bg="light"
                    
                      pill
                      style={{position:"absolute",right:"0px",fontSize:"10px",color:"black"}}
                    >
                      {cart.length}
                    </Badge>
                  </span>
                  {currentuser ? (
                    currentuser.profile ? (
                      <img
                        src={currentuser.profile}
                        alt={`${users[0].name}`}
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          border: "0.5px solid white",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/login")}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faUser}
                        size="xs"
                        style={{
                          backgroundColor: "black",
                          padding: "10px",
                          borderRadius: "50%",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/login")}
                      />
                    )
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      size="xs"
                      style={{
                        backgroundColor: "black",
                        padding: "10px",
                        borderRadius: "50%",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/login")}
                    />
                  )}
                </Navbar.Brand>
              </Dropdown.Toggle>

              {signedin || adminsignedin ? (
                <>
                  <Dropdown.Menu style={{ backgroundColor: "white" }}>
                    <Dropdown.Item href="#/action-1" disabled>
                      {currentuser?.name}
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => navigate("/login")}
                    >
                      Profile <CgProfile />
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => handlesignout()}
                    >
                      logout <IoLogOut />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </>
              ) : null}
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
