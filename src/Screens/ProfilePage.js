import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Table, Button, Card } from 'reactstrap';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'
import "../Styles/profilePageStyle.css"
import NavBarRoute from './NavbarRoute';
import axios from 'axios';




function ProfilePage() {



    const [currentUser, setCurrentUser] = useState(null);



    //Card input state area
    const [cardNameValue, setCardNameValue] = useState('');
    const [cardNumberValue, setCardNumberValue] = useState('');
    const [cardCcvValue, setCardCCVValue] = useState('');
    const [cardDateValue, setCardDate] = useState('');


    //Adres input state area
    const [hoodNameValue, setHoodNameValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [districtValue, setDistrictValue] = useState('');
    const [buildingNumberValue, setBuildingNumberValue] = useState('');
    const [streetNumberValue, setStreetNumberValue] = useState('');

    //Table State Area
    const [cards, setCards] = useState([]);
    const [addresses, setAdresses] = useState([]);










    const foodCartInformation = [
        { name: "Mc chicken", price: 15, size: "Büyük" },
        { name: "Mc chicken", price: 15, size: "Büyük" },
        { name: "Mc chicken", price: 15, size: "Büyük" },
        { name: "Bay Döner", price: 20, size: "Orta" },
        { name: "Bay Döner", price: 20, size: "Orta" },
        { name: "Bay Döner", price: 20, size: "Orta" },
        { name: "Mc chicken", price: 15, size: "Büyük" },
        { name: "Bay Döner", price: 20, size: "Orta" },
        { name: "Bay Döner", price: 20, size: "Orta" },
        { name: "Mc chicken", price: 15, size: "Büyük" },
    ];


    //İki tane form oluştur Oluşturulan her formun ynaında bir tablo olsun
    //Bu tabloların bir tanesi kart biglilerini diğeri Adress bilgilerini göstersin
    //Bu her satırdaki adres bilgisinin yanında silinebilmesi için kullnaılan butondan olsun
    //Formları kullanarak da bu bilgilerin eklemesi yapılabilinsin
    //Adress requestbody olarak card ise request param olarak kullanılıyor user id lazım


    let userid = parseInt(sessionStorage.getItem("userId"))

    useEffect(() => {
        axios.get("http://localhost:8080/user/getuserbyid", {
            params: {
                id: userid,
            }
        })
            .then((data) => {
                setCurrentUser(data.data.data);
            })
    }, [])


    useEffect(() => {
        axios.get("http://localhost:8080/user/getcards", {
            params: {
                id: userid,
            }
        }).then((data) => {
            setCards(data.data.data);
        });
    }, [])


    useEffect(() => {
        axios.get("http://localhost:8080/user/getuseradresses", {
            params: {
                id: userid,
            }
        })
            .then((data) => {
                setAdresses(data.data.data);
            })
    }, 
    [])






    return (
        <div
            className='backgroundImageStyleDiv'
        >

            <NavBarRoute></NavBarRoute>

            <div className='basicInformationDivStyle button1'>


                <Row>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }}

                                for="nameinput">

                                İsim:
                            </Label>
                            <Input
                                defaultValue={"Gökay"}
                                id="nameinput"
                                name="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="surnameinput">
                                Soyisim:
                            </Label>
                            <Input
                                defaultValue={"Dinç"}
                                id="surnameinput"
                                name="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }}

                                for="passwordinput">

                                New password:
                            </Label>
                            <Input
                                defaultValue={"Gökay"}
                                id="passwordinput"
                                name="name"
                                placeholder="Name"
                                type='password'
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="passwordagaininput">
                                New Password Again:
                            </Label>
                            <Input
                                defaultValue={"Dinç"}
                                id="passwordagaininput"
                                name="name"
                                placeholder="Name"
                                type='password'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className='changeInformationButtonStyle'> Bilgileri değiştir </Button>


            </div>

            <div className='pageLayoutDivStyle button1'>

                <Row>
                    <Col xl={3}>
                        <Form>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="cardnameinput">
                                            Card Name:
                                        </Label>
                                        <Input
                                            id="cardnameinput"
                                            name="cardname"
                                            placeholder="Card name"
                                            value={cardNameValue}
                                            onInput={e => setCardNameValue(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="cardnumberinput">
                                            Card Number:
                                        </Label>
                                        <Input

                                            id="cardnumberinput"
                                            name="cardnumber"
                                            placeholder="Card number"
                                            value={cardNumberValue}
                                            onInput={e => setCardNumberValue(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="cardccvinput">
                                            CCV
                                        </Label>
                                        <Input

                                            id="cardccvinput"
                                            name="ccv"
                                            placeholder="ccv"
                                            value={cardCcvValue}
                                            onInput={e => setCardCCVValue(e.target.value)}

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="dateinput">
                                            Date
                                        </Label>
                                        <Input

                                            id="dateinput"
                                            name="date"
                                            placeholder="Date"
                                            type="date"
                                            value={cardDateValue}
                                            onInput={e => setCardDate(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>


                        </Form>
                        <Button onClick={() => {

                            console.log(cardNameValue);
                            console.log(cardNumberValue);
                            console.log(cardCcvValue);
                            console.log(cardDateValue);

                            if (cardNameValue.trim() !== "" && cardNumberValue.trim() !== "" && cardCcvValue.trim() !== "" && cardDateValue.trim() !== "") {
                                axios.post("http://localhost:8080/user/addcard", null, {
                                    params: {
                                        cardName: cardNameValue,
                                        cardNumber: cardNumberValue,
                                        ccv: cardCcvValue,
                                        endDate: cardDateValue,
                                        userId: currentUser.id
                                    }
                                })
                                    .then(() => {
                                        console.log("Kart eklendi!!");
                                        //window.location.reload(false);
                                    })

                            }
                            else {
                                console.log("Hatalı giriş");
                            }

                        }} style={{ marginBottom: 10 }}>Kart Ekle</Button>
                    </Col>
                    <Col xl={3}>
                        <div>
                            <h3>
                                Kayıtlı Kartlar:
                            </h3>
                            <Card>
                                <Table bordered height="200">
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Card Name
                                            </th>
                                            <th>
                                                Card Number
                                            </th>
                                            <th>
                                                CCV
                                            </th>
                                            <th>
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cards.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">
                                                            {index + 1}
                                                        </th>
                                                        <td>
                                                            {
                                                                item.cardName
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.cardNumber
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.ccv
                                                            }

                                                        </td>
                                                        <td>
                                                            {
                                                                item.endDate
                                                            }
                                                        </td>
                                                        <td className="alignTdItem">

                                                            <Button color="danger">
                                                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                            </Button>

                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Card>


                        </div>
                    </Col>
                    <Col xl={3}>

                        <Form>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="hoodnameinput">
                                            Hood Name:
                                        </Label>
                                        <Input

                                            id="hoodnameinput"
                                            name="hoodname"
                                            placeholder="Hood Name"
                                            value={hoodNameValue}
                                            onInput={e => setHoodNameValue(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="cityinput">
                                            City:
                                        </Label>
                                        <Input

                                            id="cityinput"
                                            name="cityinput"
                                            placeholder="City Name"
                                            value={cityValue}
                                            onInput={e => setCityValue(e.target.value)}

                                        />
                                    </FormGroup>
                                </Col>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="districtinput">
                                            District:
                                        </Label>
                                        <Input

                                            id="districtinput"
                                            name="disctrictinput"
                                            placeholder="District Name"
                                            value={districtValue}
                                            onInput={e => setDistrictValue(e.target.value)}

                                        />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} >
                                            Building Number:
                                        </Label>
                                        <Input

                                            id="buildingnumberinput"
                                            name="buildingnumber"
                                            placeholder="Building Number"
                                            value={buildingNumberValue}
                                            onInput={e => setBuildingNumberValue(e.target.value)}

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} >
                                            Street No:
                                        </Label>
                                        <Input
                                            id="streetnoinput"
                                            name="streetno"
                                            placeholder="Street No"
                                            value={streetNumberValue}
                                            onInput={e => setStreetNumberValue(e.target.value)}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button onClick={() => {

                                console.log(hoodNameValue);
                                console.log(streetNumberValue);
                                console.log(districtValue);
                                console.log(cityValue);
                                console.log(buildingNumberValue);

                                //Use effect kullanarak tetikleme yap set kullanarak listeleri boşa al
                                //sonra axiostan bir daha çek usestate yaparak bir daha yazdır veri değiştikçe 
                                //liste de değişir


                                axios.put("http://localhost:8080/user/addadress", null, {

                                    params: {

                                        buildingNumber: buildingNumberValue,

                                        city: cityValue,

                                        district: districtValue,

                                        hoodName: hoodNameValue,

                                        id: userid,

                                        streetNo: streetNumberValue

                                    }

                                }).then(() => {

                                    console.log("Başarı ile eklendi paşam");

                                })



                            }} style={{ marginBottom: 10 }}>Adres Ekle</Button>
                        </Form>
                    </Col>
                    <Col xl={3}>
                        <div>
                            <h3>
                                Kayıtlı Adresler:
                            </h3>
                            <Card>
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
                                            addresses.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">
                                                            {index + 1}
                                                        </th>
                                                        <td>
                                                            {
                                                                item.name
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.size
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.price
                                                            }

                                                        </td>
                                                        <td className="alignTdItem">

                                                            <Button color="danger">
                                                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                                            </Button>

                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Card>


                        </div>
                    </Col>

                </Row>
            </div>

            <div className='orderHistoryDivStyle button1'>

                <h3>
                    Sipariş Geçmişi:
                </h3>
                {/* Card componenti içinde sipariş geçmişinin gösterileceği component oluşturulacak */}
                {/* Food name - Price - Size - Adress (Stringler birleştirilecek)  */}
                <Card>
                    <Table bordered height="200">
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
                                <th>
                                    Adres
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foodCartInformation.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                                {index + 1}
                                            </th>
                                            <td>
                                                {
                                                    item.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.size
                                                }
                                            </td>
                                            <td>
                                                {
                                                    item.price
                                                }

                                            </td>
                                            <td>
                                                {
                                                    item.price
                                                }

                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Card>
            </div>


        </div>
    );
} export default ProfilePage;