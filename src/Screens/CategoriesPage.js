import "../Styles/categoryComponentStyle.css";
import background from "../images/kebap.jpg";
import { useNavigate } from "react-router-dom";

import backgroundimageurl from "../images/foodbackground.jpg";
import NavBarRoute from "./NavbarRoute";
const data = ["Döner", "Kebap", "Çorba", "Hamburger", "İçecek", "Tatlı"]



export default function CateogoriesPage() {

    const navigate = useNavigate();

    return (

        <div  >
            <div className="backgroundImageStyle">

                <NavBarRoute></NavBarRoute>

                <h1 className="categoryTitleStyle">
                    Kategoriler
                </h1>

                <ul className="no-bullets">
                    {
                        data.map((item) => {
                            return (
                                <div style={
                                    {
                                        backgroundImage: `url(${background})`, backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    className="categoryButtonStyle button2"
                                    onClick={() => {
                                        console.log(item);
                                        navigate("/restaurantspage")
                                    }}
                                >

                                    <li>
                                        <p className="categoryTextStyle">
                                            <div className="titleDivStyle">
                                                <h2>
                                                    {item}
                                                </h2>
                                            </div>
                                        </p>
                                    </li>
                                </div>

                            )
                        })
                    }

                </ul>


            </div>
        </div>


    )
}