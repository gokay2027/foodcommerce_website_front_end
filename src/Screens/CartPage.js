
import { Container, Row, Col, Button, Table } from "reactstrap";
import "../Styles/cartStyle.css"
import backgroundimageurl from "../images/cartBackground.jpg";
import NavBarRoute from "./NavbarRoute";
import { RiDeleteBin6Fill } from "react-icons/ri";

const foodCartInformation = [
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Mc chicken", price: 15, size: "Büyük" },
    { name: "Bay Döner", price: 20, size: "Orta" },
    { name: "Bay Döner", price: 20, size: "Orta" },


];


const sum = foodCartInformation.reduce((accumulator, object) => {
    return accumulator + object.price;
}, 0);

function CartPage() {

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

                                            <select name="adresses" className="comboboxStyle">
                                                <option value="adres1">psum dolor sit amet, co
                                                    nsectetur adipiscing elit, sed do eiusmod tempor incid,
                                                    idunt utillum dol</option>
                                                <option value="adres2">psum dolor sit amet, co
                                                    nsectetur adipiscing elit, sed do eiusmod tempor incid,
                                                    idunt utillum dol</option>
                                                <option value="adres3">psum dolor sit amet, co
                                                    nsectetur adipiscing elit, sed do eiusmod tempor incid,
                                                    idunt utillum dol</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className="comboboxBodyDivStyle">
                                        <h5>
                                            Ödeme tipi seçiniz:
                                        </h5>

                                        <form>

                                            <select name="paymenttypes" className="comboboxStyle">
                                                <option value="kredi">Kredi</option>
                                                <option value="nakit">Nakit</option>
                                                <option value="havale">Havale</option>
                                                <option value="kapıda">Kapıda</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>

                                <Button className="buttonLayout btn-custom btn-primary" color="primary">Sipariş Ver</Button>

                                <div className="priceDivBodyStyle">
                                    <h3>
                                        Toplam: {sum} ₺
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