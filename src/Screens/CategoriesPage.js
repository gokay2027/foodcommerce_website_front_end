import "../Styles/categoryComponentStyle.css";
import background from "../images/kebap.jpg";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import backgroundimageurl from "../images/foodbackground.jpg";
import NavBarRoute from "./NavbarRoute";
const data = ["Döner", "Kebap", "Çorba", "Hamburger", "İçecek", "Tatlı"]



export default function CateogoriesPage() {


    const [categories, setCategories] = useState([]);

    const res = axios.get("http://localhost:8080/category/getAll");

    useEffect(() => {
        res.then((data) => {
        
            setCategories(data.data["data"]);
        
        });
    },
    []);


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
                        categories.map((item) => {
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
                                        navigate("/restaurantspage",{ state: { id: item["id"],cateogryName: item["name"]} });
                                        
                                    }}
                                >

                                    <li>
                                        <p className="categoryTextStyle">
                                            <div className="titleDivStyle">
                                                <h2>
                                                    {item["name"]}
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