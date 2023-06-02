import "./navbar.scss";
import { useContext } from "react";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";


const Navbar = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div className="navbar">
        <div className="wrapper">
          <div className="brand">
            <h1>Book Database</h1>
          </div>
          <div className="items">
            {/* <div className="item">
              <ListOutlinedIcon className="icon" />
            </div> */}
            <div className="item">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
            <div className="item">
              <Link to="/users" style={{ textDecoration: "none" }}>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </Link>
            </div>
            <div className="item">
              <ExitToAppIcon className="icon" onClick={handleLogout}/>
              <span>Logout</span>
            </div>

            {/* <div>
              <ExitToAppIcon className="icon" onClick={handleLogout}/>
              <span>Logout</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;