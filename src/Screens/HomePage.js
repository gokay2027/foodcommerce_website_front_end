
import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Input,
  NavbarText,
  Container,
  Col,
  Row,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardImg,
  

} from 'reactstrap';


const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'En sevdiğiniz yemekler',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ver',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'En iyi restoranlar',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: '5 Yıldızlı müşteri kalitesi',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
    key: 3,
  },
];

const tempdata = [1, 2, 3, 4, 5, 6,]

function HomePage(args) {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carouselImage" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });





  return (
    <div>
      <div>
        <Navbar>
          <NavbarBrand className="topic" href="/">
            Yemek Sepeti
          </NavbarBrand>

          <NavbarText>
            <Container>
              <Row>
                <Col>
                  <Input className="buttonRadius" style={{ height: 35 }} placeholder="Email"></Input>
                </Col>
                <Col>
                  <Input
                    className="buttonRadius"
                    type="password" style={{ height: 35 }} placeholder="Şifre"></Input>
                </Col>
                <Col>
                  <Button onClick={() => {

                    console.log("Giriş yap")
                    navigate("/mainpage")

                  }} color="primary" style={{ height: 35 }}>
                    <div style={{ alignSelf: "center" }}>
                      Giriş yap
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button onClick={() => {
                    navigate("/register")
                    console.log("Deneme")
                  }} color="primary" style={{ height: 35 }}>

                    Kayıt ol

                  </Button>
                </Col>
              </Row>
            </Container>
          </NavbarText>

        </Navbar>
      </div>


      <div>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>

      {/* Carousel altı body */}
      <div >
        <h3 style={{ paddingLeft: 40, paddingTop: 20, paddingBottom: 10 }}>
          Popüler Restoranlarımız
        </h3>
        <div style={{ paddingRight: 20, paddingLeft: 20 }}>
          <Container  fluid={true} >
            <Row>
              {
                tempdata.map((item) => {
                  return (
                    <Col
                      xl={3}
                      xs={6}>

                      <Card className="my-2 cardStyle">
                        <CardImg
                          alt="Card image cap"
                          src="https://picsum.photos/900/180"
                          style={{
                            height: 380,
                            borderRadius:0
                          }}
                          top
                          width="100%"
                        />
                        
                      </Card>
                    </Col>
                  )
                })
              }


            </Row>
          </Container>
        </div>
      </div>

      {/* Footer div */}
      
      
      <div class="footer">
        <div class="contain">
          <div class="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div class="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
         
        </div>
      </div>




    </div>

  );
}

export default HomePage;