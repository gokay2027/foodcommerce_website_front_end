
import { Container, Row, Col, Button, Table } from "reactstrap";
import "../Styles/cartStyle.css"
import backgroundimageurl from "../images/cartBackground.jpg";
import NavBarRoute from "./NavbarRoute";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { userCart } from "../CartData/cart";
import axios from "axios";



function CartPage() {


    let userid = sessionStorage.getItem("userId");

    const [selectedPaymentType, setSelectedPaymentType] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [selectedCard, setSelectedCard] = useState("");


    const [cards, setCards] = useState([]);
    const [addresses, setAddreses] = useState([]);
    const [paymenttypes, setPaymentTypes] = useState([]);



    const [cart,setCart] = useState(userCart);

    const [trigger,setTrigger]=useState(false);


    useEffect(() => {
        axios.get("http://localhost:8080/user/getcards", {
            params: {

                id: userid

            }
        }).then((data) => {
            console.log(data.data.data);
            setCards(data.data.data);
        })
    }, []);


    useEffect(() => {
        axios.get("http://localhost:8080/user/getuseradresses", {
            params: {
                id: userid,
            }
        }).then((data) => {
            setAddreses(data.data.data);
            console.log(data.data.data);
        })
    }, []);


    useEffect(() => {

        axios.get("http://localhost:8080/paymentType/getAll").then((data) => {
            setPaymentTypes(data.data.data);
            console.log(data.data.data);
        })
    }, [])

    useEffect(()=>{
        if(trigger===true){
            setCart(userCart);
            console.log("tetiklendim")
            setTrigger(false);
        }
    },[trigger])

    return (
        <div style={{
            backgroundImage: `url(${backgroundimageurl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',

        }} className="backgroundStyle">
            <NavBarRoute></NavBarRoute>
            <div>

                <Container className="containerLayoutStyle">
                    <Row>
                        <Col>
                            <div>
                                <h2>
                                    Bilgiler
                                </h2>

                                <p className="nameDivStyle">
                                    <h4>
                                        İsim Soyisim:
                                    </h4>

                                    <h5 style={{ marginLeft: 5 }}>
                                        Gökay Dinç
                                    </h5>

                                </p>

                                <div className="comboboxBodyDivStyle">
                                    <h5>
                                        Adres Seçiniz:
                                    </h5>

                                    <form>

                                        <select
                                            value={selectedAddress}
                                            onChange={e =>
                                                setSelectedAddress(e.target.value)
                                            }
                                            name="adresses"
                                            className="comboboxStyle">
                                            <option value=""></option>
                                            {
                                                addresses.map((item) => {
                                                    return (
                                                        <option value={item.id}>{item.streetNo} - {item.buildingNumber} - {item.hoodName} - {item.city} - {item.district} </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </form>
                                </div>

                                <div className="comboboxBodyDivStyle">
                                    <h5>
                                        Ödeme tipi seçiniz:
                                    </h5>

                                    <form>

                                        <select

                                            value={selectedPaymentType}
                                            onChange={e =>
                                                setSelectedPaymentType(e.target.value)
                                            }

                                            name="paymenttypes" className="comboboxStyle">
                                            <option value=""></option>
                                            {
                                                paymenttypes.map((item) => {
                                                    return (
                                                        <option value={item.id}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </form>
                                </div>
                            </div>

                            <div className="comboboxBodyDivStyle">
                                <h5>
                                    Ödeme yapılacak kart:
                                </h5>

                                <form>

                                    <select
                                        value={selectedCard}
                                        onChange={e =>
                                            setSelectedCard(e.target.value)
                                        }
                                        name="cards"
                                        className="comboboxStyle">
                                        <option value=""></option>

                                        {
                                            cards.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.cardName} - {item.cardNumber} - {item.ccv} - {item.endDate}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </form>
                            </div>


                            <Button onClick={() => {

                                if (selectedAddress !== "" && selectedPaymentType !== "" && selectedCard !== "") {

                                    console.log("Adress id: " + selectedAddress);
                                    console.log("Payment Type Id: " + selectedPaymentType);
                                    console.log("Selected Card id: " + selectedCard);

                                    for(let i =0;i<cart.length;i++){
                                        

                                        axios.post("http://localhost:8080/order/neworder",null,{
                                            params:{

                                                foodId:cart[i].foodId,
                                                paymentId:selectedPaymentType,
                                                userAdressId:selectedAddress,
                                                userId:userid
                                            }
                                        }).then(()=>{
                                            console.log("Veriler Eklendi");
                                        })

                                    }
                                }
                                else{
                                    console.log("Hatalı");
                                }


                            }} className="buttonLayout btn-custom btn-primary" color="primary">Sipariş Ver</Button>

                            <div className="priceDivBodyStyle">
                                <h3>
                                    Toplam: 300₺
                                </h3>

                            </div>

                        </Col>

                        <Col>
                            <div>
                                <h3>
                                    Sipariş Listesi:
                                </h3>
                                <div style={{
                                    height: 400,
                                    width: 700,
                                    overflowY: 'auto'
                                }}>
                                    <Table bordered height="200"

                                    >
                                        <thead>
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                    Food Name
                                                </th>
                                                <th>
                                                    Size
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">
                                                                {index + 1}
                                                            </th>
                                                            <td>
                                                                {
                                                                    item.foodName
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.sizeName
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    item.foodPrice
                                                                }

                                                            </td>
                                                            <td className="alignTdItem">

                                                                <Button
                                                                
                                                                onClick={()=>{

                                                                    console.log("Bu indexteki item silinecek " + index);
                                                                    userCart.splice(index,1);
                                                                    setTrigger(true);

                                                                }}
                                                                color="danger">
                                                                    <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                                </Button>

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </Table>
                                </div>
                            </div>

                        </Col>




                    </Row>


                </Container>



                <div className="bonapetitDiv">
                    <h2 >
                        Afiyet olsun
                    </h2>
                </div>




            </div>
        </div>

    )

}
export default CartPage;