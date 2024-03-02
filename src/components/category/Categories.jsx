import React, { useContext, useEffect, useState } from "react";
import BootstrapCard from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import "./category.css";
import AspectRatio from '@mui/joy/AspectRatio';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { dataContext } from "../Data/Data-object/Data";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Card, Typography, Skeleton, IconButton, CardContent, Stack, Pagination } from '@mui/material';
import axios, { Axios } from "axios";
import Cookies from "js-cookie";
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


const Categories = () => {
  const navigate = useNavigate();
  const { data } = useContext(dataContext);

  //State for storing paginated products
  const [products, setproducts] = useState([]);

  const { type } = useParams();
  console.log(type);
  const categoryArray = data.filter((data) => {
    if (data.category == type) {
      return data;
    }
  });

  const skeletonArray = Array.from({ length: 10 });

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const res = await axios.get(`https://localhost:7293/api/Product/product-by-category-name?name=${type}`);
        setproducts(res.data);
        console.log(products);

      }
      catch (err) {
        console.log("An error occured while fetching the product details", err);
      }
    }
    fetchProductByCategory();
    return () => {

    };
  }, []);


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
        {type.slice(0, 1).toUpperCase() + type.slice(1)}
      </h1>
      <br />
      <div className="row " style={{ justifyContent: "start" }}>
        {products.length != 0 ? products.map((data) => (
          <div
            className="col-12 col-md-6 col-xl-3 cards"
            key={data.id}
            onClick={() => navigate(`/product/${data.id}`, { replace: "true" })}
          >
            <BootstrapCard
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
              className="product-card"
            >
              <BootstrapCard.Img
                src={data.productImage}
                position="top"
                alt={products.category}
                style={{
                  width: "80%",
                  height: "52%",
                  alignSelf: "center",
                  marginTop: "30px",
                }}
              />
              <BootstrapCard.Body>
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
                  <h5 className="mb-0">{data.productName.slice(0, 16)}</h5>
                  <h5 className="text-dark mb-0">₹{data.offerPrice}</h5>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">{data.productDescription.slice(0, 8)}</p>
                  <div class="ms-auto text-warning">
                    {printRating(data.rating)}
                  </div>
                </div>
              </BootstrapCard.Body>
            </BootstrapCard>
          </div>
        ))
          :

          <>{
            skeletonArray.map(skeleton => {

            return  <Card variant="outlined" sx={{ width: 320,padding:3,margin:0.1 }}>
                <div>
                  <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                    <Skeleton>Product Name</Skeleton>
                  </Typography>
                  <Typography level="body-sm">
                    <Skeleton>Category</Skeleton>
                  </Typography>
                  <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                  >
                    <BookmarkAdd />
                    <Skeleton />
                  </IconButton>
                </div>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <Skeleton>
                    <img
                      src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                      srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </Skeleton>
                </AspectRatio>
                <CardContent orientation="horizontal">
                  <div>
                    <Typography level="body-xs">
                      <Skeleton>Product Name</Skeleton>
                    </Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                      <Skeleton>Price</Skeleton>
                    </Typography>
                  </div>

                </CardContent>
              </Card>

            })



          }</>




        }





      </div>

      <Stack spacing={2} style={{ marginTop: "50px" }}>
        <Typography>Page: {page}</Typography>
        <Pagination
          count={Math.ceil(categoryArray.length / itemsPerPage)}
          onChange={(event, value) => setpage(value)}
        />
      </Stack>
    </div >
  );
};

export default Categories;
