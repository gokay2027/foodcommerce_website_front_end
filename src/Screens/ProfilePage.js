import React, { useRef, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Table, Button, Card, CardTitle } from 'reactstrap';
import { RiDeleteBin6Fill } from "react-icons/ri";
import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'
import "../Styles/profilePageStyle.css"
import NavBarRoute from './NavbarRoute';

function ProfilePage() {

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

    return (
        <div>

            <NavBarRoute></NavBarRoute>

            <div className='basicInformationDivStyle'>

                

            </div>

            <div className='pageLayoutDivStyle'>

                <Row>
                    <Col xl={3}>
                        <Form>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="nameinput">
                                            Card Name:
                                        </Label>
                                        <Input

                                            id="nameinput"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="emailinput">
                                            Card Number:
                                        </Label>
                                        <Input

                                            id="emailinput"
                                            name="email"
                                            placeholder="E-mail"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="passwordinput">
                                            CCV
                                        </Label>
                                        <Input

                                            id="passwordinput"
                                            name="password"
                                            placeholder="Password"
                                            type='password'
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
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>


                        </Form>
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
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="nameinput">
                                            Hood Name:
                                        </Label>
                                        <Input

                                            id="nameinput"
                                            name="name"
                                            placeholder="Name"
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="emailinput">
                                            City:
                                        </Label>
                                        <Input

                                            id="emailinput"
                                            name="email"
                                            placeholder="E-mail"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col >
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} for="emailinput">
                                            District:
                                        </Label>
                                        <Input

                                            id="emailinput"
                                            name="email"
                                            placeholder="E-mail"
                                            type="email"
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

                                            id="passwordinput"
                                            name="password"
                                            placeholder="Password"

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label style={{ fontWeight: "bold", fontSize: 20 }} >
                                            Street No:
                                        </Label>
                                        <Input
                                            id="passwordinput"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>


                            </Row>


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


        </div>
    );
} export default ProfilePage;