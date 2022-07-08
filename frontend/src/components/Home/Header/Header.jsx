import React, { useContext } from "react";
// import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { DropdownButton, Dropdown, Button, Nav } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Paper, TextField } from "@material-ui/core";
import { CartContext } from "../../../contexts/CartContext";
<<<<<<< HEAD
import MyContext from "../../../contexts/MyContext";
=======
import Navigation from "../Header/Navigation"
>>>>>>> lindaUpdate

import "./Header.modules.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { PrivateNav, PublicNav } from "../../Navigation";
// import SearchProduct from "../../SearchProduct/SearchProductB";
import SearchForm from "../../SearchForm/SearchForm";

export default function Header() {
  const { search, data, page, imageList, previousPage, nextPage } = useContext(MyContext);

  const { loggedIn } = useContext(AuthContext);
  const { totalQuantities } = useContext(CartContext);
  return (
    <div>
      <div className="shipping-info">
        <Marquee className="marquee">
          <h6>FREE STANDARD SHIPPING ON ORDERS OVER €75</h6>
        </Marquee>
      </div>
      <div className="nav-info">
        <div className="searchForm">  
        <SearchForm />

          {/* <Paper style={{ padding: "0 2rem" }}>
            <form>
              <TextField fullWidth label="Search...." />
            </form>
          </Paper> */}
        </div>

        <div className="websiteName">
          <NavLink to="/">
            <h1> FALMA Shop</h1>
          </NavLink>
        </div>
        <div className="toggleNav">
          {loggedIn ? <PrivateNav /> : <PublicNav />}
        </div>
        <div className="login-cart">
          <div className="loginIcon">
            <NavLink to="/signin">{/* <PersonOutlineIcon /> */}</NavLink>
          </div>
          <div>
            <NavLink to="/myCart">
              {/* <ShoppingCartIcon /> */}
              <ShoppingCartIcon />
              <p id="shopping-cart-count">{totalQuantities}</p>
            </NavLink>
          </div>
        </div>
       
      </div>
      <div> <Navigation /></div>

      <div className="dropdown-nav">
<<<<<<< HEAD
        <div>
          <Button id="dropdown-basic-button" title="All">
            <a href="/">Home</a>
          </Button>
        </div>
        <div>
=======
       {/*  <div>
>>>>>>> lindaUpdate
          <NavLink to="/all-products" id="dropdown-basic-button" title="All">
            All
          </NavLink>
        </div> */}
      {/*   <div>
          <DropdownButton id="dropdown-basic-button" title="New Arrivals">
            <div>
              <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
            </div>
          </DropdownButton>
        </div> */}
       {/*  <div>
          <DropdownButton id="dropdown-basic-button" title="Men">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
        </div> */}
        {/* <div>
          <DropdownButton id="dropdown-basic-button" title="Women">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes auction</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
        </div> */}
       {/*  <div>
          <DropdownButton id="dropdown-basic-button" title="Children">
            <Dropdown.Item href="#/action-1">Clothes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Shoes</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brands</Dropdown.Item>
          </DropdownButton>
<<<<<<< HEAD
        </div>
      </div>
=======
        </div> */}
      </div>
     
      
>>>>>>> lindaUpdate
    </div>
  );
}
