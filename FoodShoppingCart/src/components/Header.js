import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="card_details" style={{width:"24rem",padding:10,position:"relative"}}>
            <i className="fas fa-close smallClose" style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
            <p style={{fontSize:"22px"}}>Your Cart is Empty</p>
            <img src="./cart.gif" alt="cart" className='emptycart_img' style={{width:"5rem",padding:10}}/>
        </div>
      </Menu>
        </Container>
      </Navbar>
    </>
  );
}
