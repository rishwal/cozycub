import React, { useContext, useState } from "react";
import "./Shop.css";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import { dataContext } from "../Data/Data-object/Data";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Shop = () => {
  const navigate = useNavigate();
  const { data } = useContext(dataContext);
  const [filteredData, setfilteredData] = useState(data);

  //pagination state
  const [page, setpage] = useState(1);
  let itemsPerPage = 19;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginationArray = filteredData.slice(startIndex, endIndex + 1);

  const filterByGender = (sex) => {
    const dataAfterFilter = data.filter((data) => {
      if (sex == data.sexCategory || sex == "all") return data;
    });
    setfilteredData(dataAfterFilter);
  };
  const filterByCategory = (category) => {
    const dataAfterFilter = data.filter((data) => {
      if (category == data.category || category == "all") return data;
    });
    setfilteredData(dataAfterFilter);
  };
  const filterByPrice = (price) => {
    const dataAfterFilter = filteredData.filter((data) => {
      if (price >= data.offerprice || price == 0) return data;
    });
    setfilteredData(dataAfterFilter);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsOpen2(true);
    setIsOpen3(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  return (
    <div id="parent-div">
      <h1 className="shop-heading">Shop</h1>
      <div className="filter-container container">
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
            }}
            id="dropdown-basic"
          >
            Gender
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterByGender("all")}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByGender("boy")}>
              Boys
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByGender("girl")}>
              Girls
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
            }}
          >
            Product
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterByCategory("all")}>
              All
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByCategory("nutrition")}>
              Nutrition
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByCategory("care")}>
              Care
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByCategory("clothes")}>
              Clothes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByCategory("toys")}>
              Toys
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "black",
          }}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
            }}
          >
            Price
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterByPrice(0)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => filterByPrice(300)}>
              Under 300
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByPrice(500)}>
              Under 500
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterByPrice(1000)}>
              Under 1000
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="container item-container">
        <div className="row justify-content-start">
          {paginationArray.map((data) => (
            <div className="col-6 col-md-6 col-lg-3">
              <Card
                style={{ marginTop: "20px" }}
                className="shop-card"
                key={data.id}
                onClick={() =>
                  navigate(`/product/${data.id}`, { replace: "true" })
                }
              >
                <Card.Img
                  variant="top"
                  src={data.image}
                  className="shop-card-img"
                />
                <Card.Body className="shop-card-body">
                  <Card.Title>{data.name.slice(0, 10)}</Card.Title>
                  <Card.Text className="shop-card-text">
                    <span style={{ color: "lightgreen", fontWeight: "bold" }}>
                      {" "}
                      ₹{data.offerprice}{" "}
                    </span>
                    <span style={{ textDecoration: "line-through" }}>
                      ₹{data.price}
                    </span>
                  </Card.Text>
                  <p style={{ marginBottom: "10px" }}>
                    {" "}
                    {data.description.slice(0, 13)}...
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Stack spacing={2} style={{marginTop:'50px'}}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          onChange={(event, value) => setpage(value)}
        />
      </Stack>
    </div>
  );
};

export default Shop;
