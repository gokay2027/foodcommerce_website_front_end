import { useNavigate } from "react-router-dom";
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
import backgroundimageurl from "../images/foodbackground.jpg";
const data = ["Döner", "Kebap", "Çorba", "Hamburger", "İçecek", "Tatlı"]

const cardData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


function MainPage() {

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
                            cardData.map((item) => {
                                return (
                                    <Col
                                        xl={4}
                                        md={6}
                                        xs={12}>

                                        <Card

                                            onClick={() => {
                                                navigate("/restaurantpage");
                                            }}

                                            className="my-2 restorantCardStyle button2">
                                            <CardImg
                                                alt="Card image cap"
                                                src="https://picsum.photos/900/180"
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
                                                        McDonalds
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