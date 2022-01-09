import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import youtube from "../../assets/youtube.png";
import telegram from "../../assets/telegram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import vimeo from "../../assets/vimeo.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "grey" }} variant="dark">
        <Container>
          <Navbar.Brand className={s.link} href="/shop">
            Онлайн-магазин
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.youtube.com/">
              <img className={s.social} alt="youtube" src={youtube}></img>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/">
              <img className={s.social} alt="facebook" src={facebook}></img>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/">
              <img className={s.social} alt="linkedin" src={linkedin}></img>
            </Nav.Link>
            <Nav.Link href="https://vimeo.com/">
              <img className={s.social} alt="vimeo" src={vimeo}></img>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/?lang=ru">
              <img className={s.social} alt="twitter" src={twitter}></img>
            </Nav.Link>
            <Nav.Link href="https://web.telegram.org/k/">
              <img className={s.social} alt="telegram" src={telegram}></img>
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com/">
              <img className={s.social} alt="instagram" src={instagram}></img>
            </Nav.Link>
          </Nav>
          <span className={s.phone}>:) +375 25 502 10 21</span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
