import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import "./category.css";
import { dataContext } from "../Data/Data-object/Data";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Categories = () => {
  const navigate = useNavigate();
  const { data } = useContext(dataContext);

  const { type } = useParams();
  console.log(type);
  const categoryArray = data.filter((data) => {
    if (data.category == type) {
      return data;
    }
  });

  //pagination state
  const [page, setpage] = useState(1);
  let itemsPerPage = 19;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginationArray = categoryArray.slice(startIndex, endIndex + 1);

  const iconArr = [
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaRegStar />,
    <FaRegStar />,
    <FaRegStar />,
    <FaRegStar />,
    <FaRegStar />,
  ];

  const printRating = (rating) => {
    const ratingArr = iconArr
      .slice(0, rating)
      .concat(iconArr.slice(5, 10 - rating));
    return ratingArr.map((starts) => starts);
  };

  return (
    <div className="container" id="container" style={{ alignItems: "center" }}>
      <h1 style={{ fontFamily: "cursive", paddingTop: "10vh" }}>
        {data?.category}
      </h1>
      <br />
      <div className="row " style={{ justifyContent: "start" }}>
        {paginationArray.map((data) => (
          <div
            className="col-12 col-md-6 col-xl-3 cards"
            key={data.id}
            onClick={() => navigate(`/product/${data.id}`, { replace: "true" })}
          >
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
              className="product-card"
            >
              <Card.Img
                src={data.image}
                position="top"
                alt="Laptop"
                style={{
                  width: "80%",
                  height: "52%",
                  alignSelf: "center",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      {data.category}
                    </a>
                  </p>
                  <p className="small text-danger">
                    <s>₹{data.price}</s>
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{data.name.slice(0, 16)}</h5>
                  <h5 className="text-dark mb-0">₹{data.offerprice}</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">{data.description.slice(0, 8)}</p>
                  <div class="ms-auto text-warning">
                    {printRating(data.rating)}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Stack spacing={2} style={{ marginTop: "50px" }}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(categoryArray.length / itemsPerPage)}
          onChange={(event, value) => setpage(value)}
        />
      </Stack>
    </div>
  );
};

export default Categories;
