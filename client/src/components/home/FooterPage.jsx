import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import fb from "../../photos/facebook.png";
import insta from "../../photos/instagram.png"
const FooterPage = () => {
    return (
        <MDBFooter color="black">
            <MDBContainer fluid className="text-center" >
                <a href="https://www.facebook.com/Prestige.tunisieofficiel"><img width="35px" src={fb} /></a>
                <a href="https://www.instagram.com/prestige_tunisie.officiel/" ><img width="35px" src={insta} style={{ margin: "15px" }} /></a>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"><strong>Prestige.com </strong> </a>
                </MDBContainer>
            </div>
        </MDBFooter >
    );
}

export default FooterPage;