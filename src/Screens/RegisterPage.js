import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useState } from 'react';

import axios from 'axios';

import { Label, Input, FormGroup, Button, Col, Row, Form, Container } from "reactstrap";
import "../Styles/registerComponent.css"

import backgroundimageurl from "../images/pizzaBackgroundRegister.jpeg";

import Alert from 'react-popup-alert'
import 'react-popup-alert/dist/index.css'


function RegisterPage() {

    //Input kontrolü
    const [nameValue, setNameValue] = useState('');
    const [surnameValue, setSurnameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordAgainValue, setPasswordAgainValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [dateValue, setDateValue] = useState('');

    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
    })


    function onCloseAlert() {
        setAlert({
            type: '',
            text: '',
            show: false
        })
    }


    function onShowAlert(type) {
        setAlert({
            type: type,
            text: 'Bazı alanları boş bıraktınız lütfen kontrol ediniz',
            show: true
        })
    }

    function onShowAlertSuccess() {
        setAlert({
            type: "success",
            text: 'Kaydınız başarı ile yapıldı',
            show: true
        })
    }



    return (
        <div style={{

            backgroundImage: `url(${backgroundimageurl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            paddingRight: 40,

        }}>

            <Alert
                header={'Hatalı giriş'}
                btnText={'Kapat'}
                text={alert.text}
                type={alert.type}
                show={alert.show}
                onClosePress={onCloseAlert}
                pressCloseOnOutsideClick={true}
                showBorderBottom={true}
                alertStyles={{ borderRadius: 20 }}
                headerStyles={{ marginTop: 30 }}
                textStyles={{ marginTop: 20 }}
                buttonStyles={{  }}

            />

            <div className='center inputDivStyle' >
                <h1>Kayıt Ol</h1>
            </div>
            <div style={{ paddingLeft: 30 }}>
                <Row>
                    <Col md={5}>
                    </Col>
                    <Col md={7}>

                        <Container>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="nameinput">
                                                Name:
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
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="surnameinput">
                                                Surname:
                                            </Label>
                                            <Input
                                                value={surnameValue}
                                                onInput={e => setSurnameValue(e.target.value)}
                                                id="surnameinput"
                                                name="surname"
                                                placeholder="Surname"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="emailinput">
                                                Email
                                            </Label>
                                            <Input
                                                value={emailValue}
                                                onInput={e => setEmailValue(e.target.value)}
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
                                                Password:
                                            </Label>
                                            <Input
                                                value={passwordValue}
                                                onInput={e => setPasswordValue(e.target.value)}
                                                id="passwordinput"
                                                name="password"
                                                placeholder="Password"
                                                type='password'
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="passwordinputagain">
                                                Password Again:
                                            </Label>
                                            <Input
                                                value={passwordAgainValue}
                                                onInput={e => setPasswordAgainValue(e.target.value)}
                                                id="passwordinputagain"
                                                name="password"
                                                placeholder="Password again"
                                                type='password'
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="dateinput">
                                                Date
                                            </Label>
                                            <Input
                                                value={dateValue}
                                                onInput={e => setDateValue(e.target.value)}
                                                id="dateinput"
                                                name="date"
                                                placeholder="Date"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{ fontWeight: "bold", fontSize: 20 }} for="phoneinput">
                                                Phone number
                                            </Label>
                                            <Input
                                                value={phoneNumberValue}
                                                onInput={e => setPhoneNumberValue(e.target.value)}
                                                id="phoneinput"

                                                placeholder="Phone Number"

                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormGroup check>
                                    <Input
                                        id="exampleCheck"
                                        name="check"
                                        type="checkbox"
                                    />
                                    <Label
                                        check
                                        for="exampleCheck"
                                    >
                                        Koşulları okudum kabul ediyorum.
                                    </Label>
                                </FormGroup>
                            </Form>
                        </Container>
                        <Container className='center'>
                            <Button onClick={() => {



                                if (nameValue.trim() === "" || surnameValue.trim() === "" || emailValue.trim() === "" ||
                                    passwordValue.trim() === "" || passwordAgainValue.trim() === "" || phoneNumberValue.trim() === "" || dateValue.trim() === "") {


                                        onShowAlert('error');

                                }
                                else {
                                    axios.post("http://localhost:8080/user/register", null, {
                                        params: {
                                            birthDate: dateValue,
                                            email: emailValue,
                                            name: nameValue,
                                            password: passwordValue,
                                            phoneNumber: phoneNumberValue,
                                            surname: surnameValue
                                        }
                                    }).then(() => {
                                        onShowAlertSuccess();
                                    }).catch((error)=>{

                                        console.log(error);
                                    
                                    });
                                }



                                console.log(nameValue)
                                console.log(surnameValue)
                                console.log(emailValue)
                                console.log(passwordValue)
                                console.log(passwordAgainValue)
                                console.log(phoneNumberValue)
                                console.log(dateValue)



                            }} color='primary' className='signUpButton' style={{ fontWeight: "bold", fontSize: 20 }}>
                                Sign Up
                            </Button>
                        </Container>
                    </Col>

                </Row>
            </div>
        </div>
    );
}
export default RegisterPage;