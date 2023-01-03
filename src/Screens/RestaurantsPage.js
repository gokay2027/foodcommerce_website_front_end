

import { useLocation, useNavigate } from "react-router-dom";
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
import "../Styles/mainpageStyle.css"
import axios from 'axios';


const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function RestaurantsPage() {

    const navigate = useNavigate();

    const { state } = useLocation();
    const { id, cateogryName } = state;

    console.log(id);
    console.log(cateogryName);

    const [restaurants, setRestaurants] = useState([]);


    const res = axios.get("http://localhost:8080//restaurant/getRestaurantsByCategory",
        {
            params: {
                categoryName: cateogryName
            }
        })


    useEffect(() => {
        res.then((data) => {
            setRestaurants(data.data.data);
        })
    }, [])

    console.log(restaurants);

    return (
        <div className="backgroundImageStyle">

            <NavBarRoute></NavBarRoute>

            <div className="jumbotronDivStyle" >
                <div >
                    <div className="titleDivStyle">
                        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
                            Restoranlar ({state.cateogryName})
                        </h1>
                    </div>
                </div>
            </div>

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
                                                        {item["name"]}
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
export default RestaurantsPage;