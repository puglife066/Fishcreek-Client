import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>
            <nav>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/services">Services</Link> &nbsp;
                <Link to="/askvet">Ask the Vet</Link> &nbsp;
                <Link to="/shop">Shop</Link> &nbsp;
                <Link to="/contact">Contact</Link>
            </nav>
            <p>
                Copyright &copy; 2024 Fish Creek Animal Clinic<br />
                <a
                    href="mailto:yourfirstname@yourlastname.com">yourfirstname@yourlastname.com</
                a>
            </p>
        </footer>
    );
}
export default Footer;