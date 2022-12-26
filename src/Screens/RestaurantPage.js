import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import NavBarRoute from "./NavbarRoute";
import "../Styles/restaurantPageStyles.css"


const categoriler = ["Hamburger", "Kebab", "İçecek"];

const foods = [1, 2, 3, 4, 5, 6];


const comments = [1, 2, 3, 4, 5, 6, 7, 8]





function FoodCardComponent() {

    // state değişkeni oluşturun ve ilk değerini 0 olarak ayarlayın
    const [count, setCount] = useState(0);

    // arttırma işlemini gerçekleştiren fonksiyon
    const increment = () => setCount(count + 1);

    // azaltma işlemini gerçekleştiren fonksiyon
    const decrement = () => setCount(count - 1);




    return (

        <Col xl={6}>
            <div className="foodCardStyle button1" style={{ justifyContent: "center" }}>
                <div className="rowC">
                    <div className="foodImageDiv" >
                        <Card inverse className="button1">
                            <CardImg
                                alt="Card image cap"
                                src="https://picsum.photos/900/270?grayscale"
                                height={140}
                                width="100%"
                            />

                        </Card>

                    </div>

                    <div className="secondBodyStyle">
                        <p className="foodNameStyle">
                            <h5>
                                Ohannes Burger
                            </h5>
                        </p>
                        <div className="rowC">
                            <Form>
                                <FormGroup tag="fieldset">
                                    <FormGroup check >

                                        <div className="radioButtonsBodyStyle rowC">

                                            <div className="raddioButtonDiv">
                                                <Label check>
                                                    <Input type="radio" name="radio1" /> Küçük
                                                </Label>
                                            </div>
                                            <div className="raddioButtonDiv">
                                                <Label check>
                                                    <Input type="radio" name="radio1" /> Orta
                                                </Label>
                                            </div>
                                            <div className="raddioButtonDiv">
                                                <Label check>
                                                    <Input type="radio" name="radio1" /> Büyük
                                                </Label>
                                            </div>
                                        </div>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="rowC">
                            {/* azaltma butonu */}
                            <Button className="decrementButtonStyle" onClick={
                                () => {
                                    if (count > 0) {
                                        decrement();
                                    }
                                }

                            }>-</Button>
                            {/* sayacı göster */}
                            <p className="foodCountStyle">
                                <h4>
                                    {count}
                                </h4>

                            </p>
                            {/* arttırma butonu */}
                            <Button className="incrementButtonStyle" onClick={
                                () => {
                                    increment();
                                }
                            }>+
                            </Button>

                            <div className="priceDivstyle">
                                <p>
                                    <h4>
                                        {/* Burada useState kullanılarak değer değişecek */}
                                        15 ₺
                                    </h4>

                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Col>




    )
}



function RestaurantPage() {



    return (
        <div>
            <NavBarRoute></NavBarRoute>
            <Row className="restorantInfoLayout">
                <Col xl={4}>
                    <Card inverse className="button1">
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/900/270?grayscale"
                            style={{
                                height: 370
                            }}
                            width="100%"
                        />

                    </Card>
                </Col>

                <Col xl={8}>

                    <p className="restorantNameStyle">
                        <h2>
                            Mc Donalds
                        </h2>
                    </p>

                    <p className="restorantDescriptionStyle">
                        rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt
                    </p>


                </Col>

            </Row>


            {
                categoriler.map((item) => {
                    return (
                        <div className="bodyCard">
                            <p className="categoryNameStyle">
                                <h3>
                                    {item}
                                </h3>
                            </p>
                            <Row>
                                {
                                    foods.map((item) => {
                                        return (
                                            <FoodCardComponent></FoodCardComponent>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    )
                })
            }

            <Button className="addCartButton">
                Sepete Ekle
            </Button>

            <div className="evaluationTopic">

                <h3>
                    Değerlendirmeler
                </h3>

            </div>
            {
                comments.map((item) => {
                    return (
                        <div className="commentCard button1">


                            <div >
                                <h5>
                                    Lorem ipsum <FaStar size={15} color={"orange"} className="iconStyle"></FaStar> (3)
                                </h5>


                            </div>
                            <p>
                                orem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                                a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender
                                it in voluptate velit esse cillum dolore eu fugiat nulla p
                                ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit an
                            </p>
                        </div>
                    )
                })
            }


            <div>
                <p className="evaluationTopic">
                    <h4>
                        Değerlendir:
                    </h4>

                </p>
                <input className="textInputStyle" type="text" id="fname" name="firstname" placeholder="Your name.." />

                <select className="selectInputStyle" id="country">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="rowC">
                <Button className="evaluationButtonStyle" color="primary">Yorumla</Button>
            </div>
        </div>
    )

}
export default RestaurantPage;