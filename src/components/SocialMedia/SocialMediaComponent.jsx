import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function SocialMediaContainer() {
  return (
    <div className="d-flex justify-content-center mb-5" style={{ backgroundColor: "#e6e6e6" }}>
      <div className="d-flex p-4 justify-content-around w-25">
        <div className="button" role="button" onClick={() => window.open("https://www.facebook.com/", "_blank")}>
          <div style={{ color: "#e77800", border:"solid",  borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
            <FaFacebookF size={25} />
          </div>
        </div>
        <div className="button"
          role="button"
          onClick={() => window.open("https://www.instagram.com/leomessi/", "_blank")}
        >
          <div style={{ color: "#e77800", border:"solid",  borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
            <FaInstagram size={25} />
          </div>
        </div>
        <div className="button"
          role="button"
          onClick={() => window.open("https://twitter.com/respectfulmemes", "_blank")}
        >
          <div style={{ color: "#e77800", border:"solid",  borderColor: "#e77800" }} className="rounded-circle p-3 border-3">
            <FaTwitter size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaContainer;