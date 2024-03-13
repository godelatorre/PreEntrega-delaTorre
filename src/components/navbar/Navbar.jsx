import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css';  
import { useState } from "react";
import CartWidget from "../cartwidget/CartWidget";

function Navegador() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <h1
        className="text-center mt-3"
        lang="en"
        style={{
          color: "limegreen",
          fontFamily: "cursive",
          padding: "10px",
          fontSize: "2.5rem",
        }}
      >
        DexterSeed
      </h1>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="d-flex justify-content-center">
            <div className="mx-auto">
              <img
                src="/img/dexter.jpg"
                width="50"
                height="50"
                className="d-inline-block align-top"
                style={{ borderRadius: "50%" }}
                alt="Logo"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={showMenu ? "show" : ""}
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">SEMAS PROPIAS</Nav.Link>
              <Nav.Link href="#bancos">BANCOS</Nav.Link>
              <NavDropdown title="SEMAS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#sativas">Sativas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#indicas">Indicas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#medicinal">
                  CBD Medicinal
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#ingresar">Regístrate</Nav.Link>
            </Nav>
            <div className="ms-auto">
              <CartWidget />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegador;
