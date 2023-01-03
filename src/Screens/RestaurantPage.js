import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import NavBarRoute from "./NavbarRoute";
import "../Styles/restaurantPageStyles.css"
import { useLocation } from "react-router-dom";
import axios from "axios";


const categoriler = ["Hamburger", "Kebab", "İçecek"];

const foods = [1, 2, 3, 4, 5, 6];


function FoodCardComponent({ price, foodName, sizes }) {

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
                            <Button>Sepete Ekle</Button>

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


    let userid = sessionStorage.getItem("userId");

    const [contentValue, setContentValue] = useState("");

    const [rateSelect, setRateSelect] = useState("1");

    const { state } = useLocation();
    const { id, cateogryName } = state;
    console.log(state.id + " Restoran idsi");

    //evaluations
    const [evalutaions, setEvaluations] = useState([]);

    useEffect(() => {
            axios.get("http://localhost:8080/restaurant/restaurantevaluation", {
                params: {
                    id: state.id
                }
            }).then((data) => {
                console.log(data.data.data);
                setEvaluations(data.data.data);
            })
       
        
    }, [])


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
                evalutaions.map((item) => {
                    return (
                        <div className="commentCard button1">
                            <div>
                                <h5>
                                    {item.user.name} {item.user.surname} <FaStar size={15} color={"orange"} className="iconStyle"></FaStar> {item.rateValue}
                                </h5>
                            </div>
                            <p>
                                {item.content}
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
                <input

                    value={contentValue}
                    onInput={e => setContentValue(e.target.value)}
                    className="textInputStyle"
                    type="text"
                    id="content"
                    name="content" placeholder="Enter your comment" />

                <select
                    value={rateSelect}
                    onChange={e => setRateSelect(e.target.value)}

                    className="selectInputStyle" id="rate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="rowC">
                <Button

                    onClick={() => {

                        console.log(contentValue);
                        console.log(rateSelect + " Puan");
                        axios.post("http://localhost:8080/restaurant/addEvaluation", null, {

                            params: {

                                content: contentValue,
                                rateValue: parseInt(rateSelect),
                                restaurantId: state.id,
                                userId: userid
                            }
                        })



                    }}


                    className="evaluationButtonStyle" color="primary">Yorumla</Button>
            </div>
        </div>
    )

}
export default RestaurantPage;