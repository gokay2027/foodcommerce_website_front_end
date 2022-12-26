import 'bootstrap/dist/css/bootstrap.min.css';

import { Label, Input, FormGroup, Button, Col, Row, Form, Container } from "reactstrap";
import "../Styles/registerComponent.css"

import backgroundimageurl from "../images/pizzaBackgroundRegister.jpeg";


function RegisterPage() {
    return (
        <div style={{

            backgroundImage: `url(${backgroundimageurl})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            paddingRight:40,
            
        }}>
            <div className='center inputDivStyle' >
                <h1>Kayıt Ol</h1>
            </div>
            <div style={{paddingLeft:30}}>
                <Row>
                    <Col md={5}>
                    </Col>
                    <Col md={7}>

                        <Container>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="nameinput">
                                                Name:
                                            </Label>
                                            <Input
                                                id="nameinput"
                                                name="name"
                                                placeholder="Name"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="surnameinput">
                                                Surname:
                                            </Label>
                                            <Input
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
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="emailinput">
                                                Email
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
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="passwordinput">
                                                Password:
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
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="passwordinputagain">
                                                Password Again:
                                            </Label>
                                            <Input
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
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="dateinput">
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
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label style={{fontWeight:"bold",fontSize:20}} for="phoneinput">
                                                Phone number
                                            </Label>
                                            <Input
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
                        <Container  className='center'>
                            <Button onClick={()=>{
                                console.log("Kayıt ol")
                            }}  color='primary' className='signUpButton' style={{fontWeight:"bold",fontSize:20}}>
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