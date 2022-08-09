import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../styles/socialMedia.css";

function SocialMediaContainer() {
    return (
        <Container className="pb-5 d-flex justify-content-center">
            <div className="wrapper">
                <div className="button" onClick={()=> window.open("https://www.facebook.com/", "_blank")}>
                    <div className="icon">
                    {/* color="#e77800" */}
                        <FaFacebookF />
                    </div>
                    <span>Facebook</span>
                </div>
                <div className="button" onClick={()=> window.open("https://www.instagram.com/leomessi/", "_blank")}>
                    <div className="icon">
                        <FaInstagram />
                    </div>
                    <span>Instagram</span>
                </div>
                <div className="button" onClick={()=> window.open("https://twitter.com/respectfulmemes", "_blank")}>
                    <div className="icon">
                        <FaTwitter />
                    </div>
                    <span>Twitter</span>
                </div>
            </div>
        </Container>
    );
}

export default SocialMediaContainer;