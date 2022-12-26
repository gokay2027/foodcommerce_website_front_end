import { Link } from "react-router-dom";
import "../Styles/navbarStyle.css"
import { BsFillCartFill,BsFillPersonFill } from "react-icons/bs";

function NavBarRoute() {

    return (

        <div style={{justifyContent:"space-between"}} className="navStyle rowC">
            <div >
                <h4 className="topicStyle">
                    Yemek Sepeti
                </h4>

            </div>
            <div className="iconsDivStyle button1">
                <Link to="/cartpage"><BsFillCartFill size={30}  > </BsFillCartFill></Link>
                <Link to="/profilepage" ><BsFillPersonFill style={{marginLeft:30}} size={30}></BsFillPersonFill></Link>
            </div>
        </div>
    );


} export default NavBarRoute;