import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <Link to="/">
                <img src="/home.gif" alt="Home" width="132" height="27" />
            </Link> &nbsp;
            <Link to="/services">
                <img src="/services.gif" alt="Services" width="132"
                    height="27" />
            </Link> &nbsp;
            <Link to="/askvet">
                <img src="/askthevet.gif" alt="Ask the Vet" width="132"
                    height="27" />
            </Link> &nbsp;
            <Link to="/shop">
                <img src="/shop.gif" alt="Shop" width="132"
                    height="27" />
            </Link> &nbsp;
            <Link to="/contact">
                <img src="/contact.gif" alt="Contact" width="132" height="27"
                />
            </Link>
        </nav>
    );
}
export default NavBar;