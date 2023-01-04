import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import NavBarRoute from "./NavbarRoute";
import "../Styles/restaurantPageStyles.css"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { userCart } from "../CartData/cart";


function FoodCardComponent({ foodid, price, foodName, sizes, restaurantId }) {

    const [size, setSize] = useState("");

    return (

        <Col xl={6}>
            <div className="foodCardStyle button1" style={{ justifyContent: "center" }}>
                <div className="rowC">
                    <div className="foodImageDiv" >
                        <Card inverse className="button1">
                            <CardImg
                                alt="Card image cap"
                                src="https://www.yapikatalogu.com/Files/Project/buyukev-1.jpg"
                                height={140}
                                width="100%"
                            />

                        </Card>

                    </div>

                    <div className="secondBodyStyle">
                        <p className="foodNameStyle">
                            <h5>
                                {foodName}
                            </h5>
                        </p>
                        <div className="rowC">
                            <Form>
                                <FormGroup tag="fieldset">
                                    <FormGroup check >

                                        <div className="radioButtonsBodyStyle rowC">

                                            {
                                                sizes.map((item) => {
                                                    return (
                                                        <div className="raddioButtonDiv">
                                                            <Label check>
                                                                <Input
                                                                    onChange={
                                                                        (e) => setSize({ id: e.target.id, sizeName: item.name })

                                                                    }

                                                                    id={item.id}
                                                                    type="radio" name={"radio"} /> {item.name}
                                                            </Label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </div>

                        <div className="rowC">
                            <Button

                                onClick={() => {

                                    if (size !== "") {

                                        console.log("Food id: " + foodid);
                                        console.log("Food Name: " + foodName);
                                        console.log("Food price: " + price);
                                        console.log(size.id);
                                        console.log(size.sizeName)
                                        console.log(restaurantId);

                                        userCart.push({
                                            foodId: foodid,
                                            foodName: foodName,
                                            foodPrice: price,
                                            sizeId: size.id,
                                            sizeName: size.sizeName,
                                            restaurantId: restaurantId
                                        });

                                        console.log(userCart);

                                    }
                                    else {

                                        console.log("Boyut seçmediniz!!");

                                    }

                                }}

                            >Sepete Ekle</Button>

                            <div className="priceDivstyle">
                                <p>
                                    <h4>
                                        {/* Burada useState kullanılarak değer değişecek */}
                                        {price}
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

    const [categories, setCategories] = useState([]);

    const [restaurant, setRestaurant] = useState({});

    const [foods, setFoods] = useState([]);

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

    useEffect(() => {

        axios.get("http://localhost:8080//restaurant/getAllCategories", {
            params: {
                restaurantId: state.id
            }
        }).then((data) => {
            console.log(data.data.data);
            setCategories(data.data.data);
        })
    }, [])


    useEffect(() => {
        axios.get("http://localhost:8080/restaurant/restaurantmenu", {
            params: {
                id: state.id
            }
        }).then((data) => {
            console.log(data.data.data);
            setFoods(data.data.data);
        })
    }, [])


    useEffect(() => {

        axios.get("http://localhost:8080/restaurant/restaurantById",
            {
                params: {
                    id: state.id,
                }
            }).then((data) => {
                console.log(data.data.data);
                setRestaurant(data.data.data);

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
                            {
                                restaurant.name
                            }
                        </h2>
                    </p>

                    <p className="restorantDescriptionStyle">
                        rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt
                    </p>
                    <Button onClick={() => {


                        axios.post("http://localhost:8080/favoriterestaurants/addfavoriterestaurant",null,{
                            params:{
                                restaurantid:state.id,
                                userid:userid
                            }
                        }).then(()=>{
                            console.log("Favori restoranlara eklendi");
                        })


                    }}  >Add to favorite</Button>

                </Col>



            </Row>

            {
                categories.map((categoryitem) => {
                    return (
                        <div className="bodyCard">
                            <p className="categoryNameStyle">
                                <h3>
                                    {categoryitem.name}
                                </h3>
                            </p>
                            <Row>
                                {
                                    foods.map((fooditem) => {
                                        if (categoryitem.name === fooditem.category.name) {
                                            return (
                                                <FoodCardComponent
                                                    restaurantId={state.id}
                                                    foodid={fooditem.id} sizes={fooditem.portion} price={fooditem.price} foodName={fooditem.name}></FoodCardComponent>
                                            )
                                        }
                                    })
                                }
                            </Row>
                        </div>
                    )
                })
            }



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