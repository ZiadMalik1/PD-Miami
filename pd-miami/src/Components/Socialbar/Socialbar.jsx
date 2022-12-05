import React from "react";
import "./Socialbar.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Email from "@mui/icons-material/Email";

const Socialbar = () => {
  return (
    <div className="social__container">
      <div className="email__handle">
        <EmailIcon sx={{ color: "#fff", fontSize: "30px" }} />
        <h4 style={{ color: "#fff" }}>mchwihne@gmail.com</h4>
      </div>
      <div className="social__handles">
        <FacebookIcon sx={{ color: "#fff", fontSize: "30px" }} />
        <InstagramIcon sx={{ color: "#fff", fontSize: "30px" }} />
        <LinkedInIcon sx={{ color: "#fff", fontSize: "30px" }} />
        <TwitterIcon sx={{ color: "#fff", fontSize: "30px" }} />
      </div>
    </div>
  );
};

export default Socialbar;
