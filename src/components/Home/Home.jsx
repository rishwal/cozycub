import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  ExampleCarouselImage1,
  ExampleCarouselImage2,
  ExampleCarouselImage3,
} from "./images/ExampleCarouselImage";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../Data/Data-object/Data";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { CarouselItem } from "react-bootstrap";

const Home = () => {
  const { data, setData } = useContext(dataContext);

  const navigate = useNavigate();

  return (
    <div id="home-container">
      <div id="home">
        <Carousel fade controls={false} interval={3000} id="carousel">
          <Carousel.Item className="first-item">
            <ExampleCarouselImage2 text="First slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage1 text="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage3 text="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="card-container">
          <Card
            style={{
              bottom: "0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            className="category-card "
            onClick={() => navigate("/product-categories/clothes")}
          >
            <div
              className="card-image"
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={data[39].image}
                style={{ height: "80%", width: "75%" }}
              />
            </div>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "60%",
              }}
            >
              <Card.Title style={{ fontWeight: "600" }}>Clothes</Card.Title>
              <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
                Clothes for infants{" "}
                <span className="description-text">
                  Cozycub where style meets comfort for your little one's
                  everyday moments.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            className="category-card"
            onClick={() => navigate("/product-categories/toys")}
          >
            <div
              className="card-image"
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={data[58].image}
                style={{ height: "80%", width: "75%" }}
              />
            </div>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "60%",
              }}
            >
              <Card.Title style={{ fontWeight: "600" }}>Toys</Card.Title>
              <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
                Toys for babies{" "}
                <span className="description-text">
                  From interactive learning toys to cuddly companions, find the
                  perfect playmate for your child.{" "}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            className="category-card"
            onClick={() => navigate("/product-categories/care")}
          >
            <div
              className="card-image"
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={data[65].image}
                style={{ height: "80%", width: "75%" }}
              />
            </div>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "60%",
              }}
            >
              <Card.Title style={{ fontWeight: "600" }}>Care</Card.Title>
              <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
                Care products of premium brands{" "}
                <span className="description-text">
                  Nurture your baby with love and care using our premium Care
                  Products.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            className="category-card"
            onClick={() => navigate("/product-categories/nutrition")}
          >
            <div
              className="card-image"
              style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Img
                src={data[71].image}
                style={{ height: "80%", width: "75%" }}
              />
            </div>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "60%",
              }}
            >
              <Card.Title style={{ fontWeight: "600" }}>Nutrition</Card.Title>
              <Card.Text style={{ textAlign: "left", fontSize: "12px" }}>
                Nutritional food products{" "}
                <span className="description-text">
                  Fuel your baby's growth with our nutritious Baby Food
                  collection at Cozycub.{" "}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div id="three-feature-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="three-features feature-1">
                <FaShippingFast className="feature-icons icon-1" />
                <h2>Fast</h2>
                <p>
                  Rapid transactions for seamless shopping and checkout
                  experiences.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="three-features  feature-2">
                <RiSecurePaymentLine className="feature-icons icon-2" />
                <h2>Secure</h2>
                <p>
                  Robust encryption ensures safe and protected customer
                  transactions.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="three-features  feature-3">
                <SiTrustpilot className="feature-icons icon-3" />
                <h2>Reliable</h2>
                <p>
                  Consistent performance and trustworthy service for
                  uninterrupted online shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    <div id="home-category">
      <div className="container">
        <div className="row">
          <div className="col-6  category clothes"></div>
          <div className="col-6  category toys" ></div>
          <div className="col-6  category care" ></div>
          <div className="col-6  category nutrition" ></div>
        </div>
      </div>
    </div>
      {/* <section id="featured-products"> */}
      {/* <header> */}
      {/* <h2>LatestToys Collections</h2> */}
      {/* <div className="toys-category"> */}
      {/* <button>SHOW ALL</button> */}
      {/* <button>BABY TOYS</button> */}
      {/* <button>ACCESSORIES</button> */}
      {/* <button>SOFT TOYS</button> */}
      {/* </div> */}
      {/* </header> */}
      {/* <div className="container-fluid "> */}
      {/* <div className="row featured-product-list"> */}
      {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {/* <Card style={{ width: "18rem" }} > */}
      {/* <Card.Img variant="top" src={img} /> */}
      {/* </Card> */}
      {/* </div> */}
      {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {/* <Card style={{ width: "18rem" }}> */}
      {/* <Card.Img variant="top" src={img} /> */}
      {/* </Card> */}
      {/* </div> */}
      {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {/* <Card style={{ width: "18rem" }}> */}
      {/* <Card.Img variant="top" src={img} /> */}
      {/* </Card> */}
      {/* </div> */}
      {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {/* <Card style={{ width: "18rem" }}> */}
      {/* <Card.Img variant="top" src={img} /> */}
      {/* </Card> */}
      {/* </div> */}
      {/* <div className="col-12 col-md-6 col-lg-3"> */}
      {/* <Card style={{ width: "18rem" }}> */}
      {/* <Card.Img variant="top" src={img} /> */}
      {/* </Card> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}

      <section id="home-poster">
        <div className="container">
          <div className="row " style={{ padding: "20px" }}>
            <div
              className="home-poster-images poster-1 col-12 col-md-6"
              onClick={() => navigate("/product-categories/toys")}
            ></div>
            <div
              className="home-poster-images  poster-1-mobile col-12 col-md-6"
              onClick={() => navigate("/product-categories/toys")}
            ></div>
            <div
              className="home-poster-images poster-2 col-12 col-md-6"
              onClick={() => navigate("/product-categories/clothes")}
            ></div>
            <div
              className="home-poster-images  poster-2-mobile col-12 col-md-6"
              onClick={() => navigate("/product-categories/clothes")}
            ></div>
          </div>
        </div>
      </section>

      <div className="scroll-list ">
        {data.slice(2).map((data) => (
          <div className="col-4 col-md-4 col-lg-2 scroll-items" key={data.id}>
            <img
              src={data.image}
              alt={data.name}
              onClick={() => navigate(`/product/${data.id}`)}
            />
            <p
              style={{ marginTop: "20px", fontFamily: "cursive" }}
              className="scrollbar-text"
            >
              {" "}
              {data.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
