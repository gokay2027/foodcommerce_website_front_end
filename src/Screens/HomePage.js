
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'





const items = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/800px-NCI_Visuals_Food_Hamburger.jpg',
    altText: 'En sevdiğiniz yemekler',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ver',
    key: 1,
  },
  {
    src: 'https://play-lh.googleusercontent.com/0loj-whL4XSeF4v5W3d213b1pH0RRTQUlmK1VESE-Rsydp06rVyPTq_Hwpwm1avB8URL',
    altText: 'En iyi restoranlar',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
    key: 2,
  },
  {
    src: 'https://i.lezzet.com.tr/images-xxlarge-recipe/cikolata-soslu-waffle-46e20db3-cb05-4cb3-aded-7636e03437f9.jpg',
    altText: '5 Yıldızlı müşteri kalitesi',
    caption: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve',
    key: 3,
  },
];

const tempdata = [1, 2, 3, 4, 5, 6,];








function HomePage(args) {

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [stateUser, setUser] = useState(null);


  useEffect(() => {
    if (stateUser != null) {
      
      sessionStorage.setItem("userId",stateUser.id);
      sessionStorage.setItem("userName",stateUser.name);
      sessionStorage.setItem("userEmail",stateUser.email);
      sessionStorage.setItem("userPassword",stateUser.password);
      
      console.log(stateUser);
      navigate("/mainpage");
    }
  }, [stateUser]);


  const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })


  function onCloseAlert() {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }


  function onShowAlert(type) {
    setAlert({
      type: type,
      text: 'Kullanıcı adını veya şifreyi hatalı girdiniz lütfen tekrar deneyin',
      show: true
    })
  }

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
        <img src={item.src} height={600} alt={item.altText} className="carouselImage" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });


  return (
    <div>
      <Alert
        header={'Hatalı giriş'}
        btnText={'Kapat'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{ borderRadius: 20 }}
        headerStyles={{ marginTop: 30 }}
        textStyles={{ marginTop: 20 }}
        buttonStyles={{ backgroundColor: "red" }}

      />
      <div>
        <Navbar>
          <NavbarBrand className="topic" href="/">
            Yemek Sepeti
          </NavbarBrand>

          <NavbarText>
            <Container>
              <Row>
                <Col>
                  <Input
                    value={emailValue} onInput={e => setEmailValue(e.target.value)}
                    name="email" className="buttonRadius" style={{ height: 35 }} placeholder="Email"></Input>
                </Col>
                <Col>
                  <Input
                    value={passwordValue} onInput={e => setPasswordValue(e.target.value)}
                    name="password"
                    className="buttonRadius"
                    type="password" style={{ height: 35 }} placeholder="Şifre"></Input>
                </Col>
                <Col>
                  <Button onClick={() => {


                    if (emailValue.trim("").length === 0 || passwordValue.trim("").length === 0) {

                      onShowAlert('warning');
                      console.log("Yanlış girdi");

                    }
                    else {
                      let res = axios.get("http://localhost:8080/user/login", {
                        params: {
                          email: emailValue,
                          password: passwordValue
                        }
                      })
                      res.then((data) => {
                        setUser(data.data.data);
                      })
                        .finally(() => {
                          if (stateUser === null) {

                            onShowAlert("error");

                          }
                        })
                    }

                  }
                  } color="primary" style={{ height: 35 }}>
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
          <Container fluid={true} >
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
                          src="https://kofteciyusuf.com/uploads/galleries/1_21.07.2021_02_36_23.jpg"
                          style={{
                            height: 380,
                            borderRadius: 0
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
