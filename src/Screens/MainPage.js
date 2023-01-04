import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Container, Row, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu,
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,

} from "reactstrap";
import NavBarRoute from "./NavbarRoute";
import axios from 'axios';
import "../Styles/mainpageStyle.css"
import backgroundimageurl from "../images/foodbackground.jpg";






function MainPage() {

    const [restaurants, setRestaurants] = useState([]);


    const res = axios.get("http://localhost:8080/restaurant/getall");

    useEffect(() => {

        res.then((data) => {
            setRestaurants(data.data["data"]);
        });

        
    }, []);


    const navigate = useNavigate();

    return (
        <div className="backgroundImageStyle">

            <NavBarRoute></NavBarRoute>
            <Container className="jumbotronStyle" fluid={true}>
                <Row>

                    <Container >
                        <div className="titleDiv">
                            <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
                                Senin için En İyi Restoranlar
                            </h1>
                        </div>

                    </Container>

                    <div className="buttonMargin" onClick={
                        () => {

                            navigate("/categoriespage");
                        }
                    }>

                        <div className="middleDiv button button2">
                            Kategoriler
                        </div>
                    </div>
                </Row>
            </Container>

            {/* 


                



            */}


            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
                <Container fluid>
                    <Row>
                        {
                            restaurants.map((item) => {
                                return (
                                    <Col
                                        xl={4}
                                        md={6}
                                        xs={12}>
                                            
                                        <Card

                                            onClick={() => {
                                                navigate("/restaurantpage",{ state: { id: item["id"]} });
                                            }}

                                            className="my-2 restorantCardStyle button2">
                                            <CardImg
                                                alt="Card image cap"
                                                src="https://www.yapikatalogu.com/Files/Project/buyukev-1.jpg"
                                                style={{
                                                    height: 380,
                                                    borderRadius: 0
                                                }}
                                                top
                                                width="100%"
                                            />
                                            <CardBody>
                                                <CardTitle>
                                                    <h4 className="cardTitleStyle">
                                                        {item.name}
                                                    </h4>
                                                </CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>


        </div >
    )

}
export default MainPage;