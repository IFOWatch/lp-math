import React from "react"
import { NavbarBrand, Navbar, Row, Col } from 'react-bootstrap'
import ButtonModal from "./ButtonModal"
import bscLogo from "../static/bsc.png"
import "./AppFooter.css"

class AppFooter extends React.Component {
    render() {
        const modalBody = <div>
            <p>I hope you found this page useful! I took a day off of work to make it.</p>
            <p>If you appreciate this, please consider donating so I can rationalize taking more
                days off to make more cool stuff like this.
            </p>
            <p><a href="">Here's my address</a>. Thanks so much!</p>
        </div>;
        return (
            <div className="fixed-bottom">  
                <Navbar variant="dark" bg="dark">
                    <NavbarBrand>
                        Made with ♡ for <img className="logo" src={bscLogo} /> &nbsp;&nbsp;
                        <ButtonModal variant="outline-warning" buttonValue="Donations" modalHeader="Howdy!" modalBody={modalBody}></ButtonModal> <span className="small">
                            always appreciated!
                        </span>
                    </NavbarBrand>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;