import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Table, Button, Card } from 'reactstrap';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'
import "../Styles/profilePageStyle.css"
import NavBarRoute from './NavbarRoute';
import axios from 'axios';
import { AxiosProvider } from 'react-axios';
import { useNavigate } from 'react-router-dom';





function ProfilePage() {

    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    //Basic information state area
    const [nameValue, setNameValue] = useState("");
    const [surnameValue, setSurnameValue] = useState("");

    //New password - Old password
    const [newPasswordValue, setNewPasswordValue] = useState("");
    const [oldPasswordValue, setOldPasswordValue] = useState("");

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


    //Triggers
    const [cardTrigger, setCardTrigger] = useState(true);
    const [addressTrigger, setAddressTrigger] = useState(true);




    //input default value
    const [inputDefaultName, setInputDefaultName] = useState("");
    const [inputDefaultSurName, setInputDefaultSurname] = useState("");


    //All orders history State
    const [orders, setOrdersHistory] = useState([]);


    //Favorite Restaurants
    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

    //İki tane form oluştur Oluşturulan her formun ynaında bir tablo olsun
    //Bu tabloların bir tanesi kart biglilerini diğeri Adress bilgilerini göstersin
    //Bu her satırdaki adres bilgisinin yanında silinebilmesi için kullnaılan butondan olsun
    //Formları kullanarak da bu bilgilerin eklemesi yapılabilinsin
    //Adress requestbody olarak card ise request param olarak kullanılıyor user id lazım


    let userid = parseInt(sessionStorage.getItem("userId"))



    useEffect(() => {
        if (currentUser === null) {
            axios.get("http://localhost:8080/user/getuserbyid", {
                params: {
                    id: userid,
                }
            })
                .then((data) => {
                    setCurrentUser(data.data.data);
                    setInputDefaultName(data.data.data.name);
                    setInputDefaultSurname(data.data.data.surname);
                    setName(data.data.data.name);
                    setSurname(data.data.data.surname);
                })
        }
    }, []);


    // useEffect(() => {
    //     axios.get("http://localhost:8080/user/getcards", {
    //         params: {
    //             id: userid,
    //         }
    //     }).then((data) => {
    //         setCards(data.data.data);
    //     });
    // }, [])


    // useEffect(() => {

    //     if (addresses.length !== 0) {
    //         axios.get("http://localhost:8080/user/getuseradresses", {
    //             params: {
    //                 id: userid,
    //             }
    //         })
    //             .then((data) => {
    //                 setAdresses(data.data.data);
    //             })
    //     }

    // }, [])





    useEffect(() => {

        if (cardTrigger === true) {
            axios.get("http://localhost:8080/user/getcards", {
                params: {
                    id: userid,
                }
            }).then((data) => {
                setCards(data.data.data);
                setCardTrigger(false)


            });
        }

    }, [cardTrigger])


    useEffect(() => {

        if (addressTrigger === true) {
            axios.get("http://localhost:8080/user/getuseradresses", {
                params: {
                    id: userid,
                }
            })
                .then((data) => {
                    setAdresses(data.data.data);
                    setAddressTrigger(false);
                })
        }
    }, [addressTrigger])


    useEffect(() => {
        axios.get("http://localhost:8080/order/allorders", {
            params: {
                userId: userid,
            }
        }).then((data) => {
            console.log(data.data.data);
            setOrdersHistory(data.data.data);
        })
    }, [])



    useEffect(() => {
        axios.get("http://localhost:8080/favoriterestaurants/getAllFavoriteRestaurantsByUserId", {
            params: {
                userId: userid
            }
        }).then((data) => {
            setFavoriteRestaurants(data.data.data);
            console.log(data.data.data);
        })
    }, [])

    return (
        <div
            className='backgroundImageStyleDiv'
        >
            <NavBarRoute></NavBarRoute>

            <div className='basicInformationDivStyle button1'>


                <Row>
                    <p>
                        <h5>
                            Merhaba: {name} {surname}
                        </h5>
                    </p>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }}
                                for="nameinput">
                                İsim Değiştir:
                            </Label>
                            <Input
                                value={nameValue}
                                onInput={e => setNameValue(e.target.value)}
                                id="nameinput"
                                name="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="surnameinput">
                                Soyisim Değiştir:
                            </Label>
                            <Input
                                value={surnameValue}
                                onInput={e => setSurnameValue(e.target.value)}

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

                                for="oldpasswordinput">

                                Old Password:
                            </Label>
                            <Input
                                value={oldPasswordValue}
                                onInput={e => setOldPasswordValue(e.target.value)}
                                id="oldpasswordinput"
                                name="oldpasswordinput"
                                placeholder="Old Password"
                                type='password'
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="newpasswordinput">
                                New Password:
                            </Label>
                            <Input
                                value={newPasswordValue}
                                onInput={e => setNewPasswordValue(e.target.value)}
                                id="newpasswordinput"
                                name="newpassword"
                                placeholder="New Password"
                                type='password'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Button

                            onClick={() => {

                                if (nameValue.trim() !== "" && surnameValue.trim() !== "") {

                                    axios.put("http://localhost:8080/user/nameChange", null, {
                                        params: {
                                            newName: nameValue,
                                            userId: userid
                                        }
                                    }).then(() => {

                                        axios.put("http://localhost:8080/user/surnameChange", null, {
                                            params: {
                                                newSurname: surnameValue,
                                                userId: userid
                                            }
                                        }).then(() => {
                                            console.log("Surname changed");
                                            setCurrentUser(null);
                                        });

                                    });



                                }
                                else {
                                    console.log("Bilgiler değiştirilemedi")
                                }
                            }}
                            color='primary' className='changeInformationButtonStyle'> Bilgileri değiştir </Button>



                    </Col>

                    <Col>
                        <Button onClick={() => {

                            console.log("parola değiştir");
                            console.log(oldPasswordValue + " Old password");
                            console.log(newPasswordValue + " New Password");

                            if (newPasswordValue.trim() !== "" && oldPasswordValue.trim() !== "") {
                                axios.put("http://localhost:8080/user/passwordChange", null, {
                                    params: {

                                        newPassword: newPasswordValue,
                                        oldPassword: oldPasswordValue,
                                        userId: userid,
                                    }
                                }).then(() => {
                                    console.log("Şifre değiştirildi");
                                    setCurrentUser(null);
                                });
                            }




                        }} color='primary' className='changeInformationButtonStyle'> Parola değiştir </Button>
                    </Col>


                </Row>



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
                                        setAddressTrigger(true);
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

                                                            <Button

                                                                onClick={() => {
                                                                    console.log(item.id + " Verisi silindi");

                                                                    axios.delete("http://localhost:8080/user/deleteCard", {
                                                                        params: {
                                                                            cardId: item.id,
                                                                            userId: userid
                                                                        }
                                                                    }).then(
                                                                        () => {
                                                                            setCardTrigger(true);
                                                                        }
                                                                    )



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

                                    console.log("Başarı ile eklendi");
                                    setAdresses([]);
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

                                                City
                                            </th>
                                            <th>
                                                Hood Name
                                            </th>
                                            <th>
                                                District
                                            </th>
                                            <th>
                                                Street No
                                            </th>
                                            <th>
                                                Building Number
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
                                                                item.city
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.hoodName
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.district
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.streetNo
                                                            }

                                                        </td>
                                                        <td>
                                                            {
                                                                item.buildingNumber
                                                            }

                                                        </td>

                                                        <td className="alignTdItem">

                                                            <Button

                                                                onClick={() => {


                                                                    axios.delete("http://localhost:8080/user/deleteAddress", {
                                                                        params: {
                                                                            addressId: item.id,
                                                                            userId: userid
                                                                        }
                                                                    }).then(() => {
                                                                        console.log(item.id + " idli adres silindi");
                                                                        setAdresses([]);
                                                                    })
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
                                    Price
                                </th>
                                <th>
                                    Adres
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                                {index + 1}
                                            </th>
                                            <td>
                                                {
                                                    item.food.name
                                                }
                                            </td>

                                            <td>
                                                {
                                                    item.food.price
                                                }

                                            </td>
                                            <td>
                                                {
                                                    item.userAddress.streetNo
                                                }
                                                -
                                                {
                                                    item.userAddress.hoodName
                                                }
                                                -
                                                {
                                                    item.userAddress.city
                                                }
                                                -
                                                {
                                                    item.userAddress.district
                                                }
                                                -
                                                {
                                                    item.userAddress.buildingNumber
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


            <div className='orderHistoryDivStyle button1'>

                <h3>
                    Favori Restoranlar:
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
                                    Restoran Adı:
                                </th>

                                <th>
                                    Ekrana git
                                </th>
                                <th>
                                    ##
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                favoriteRestaurants.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">
                                                {index + 1}
                                            </th>
                                            <td>
                                                {
                                                    item.restaurant.name
                                                }
                                            </td>

                                            <td>
                                                <Button onClick={()=>{
                                                    navigate("/restaurantpage",{ state: { id: item.restaurant.id} });
                                                }} color='primary'> Siteye git </Button>

                                            </td>
                                            <td>
                                                

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