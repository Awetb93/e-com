import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h5>Company</h5>
        <h6>Press Releases</h6>
        <h6>Investor Relation</h6>
        <h6>Contract</h6>
      </div>
      <div className="footer-content">
        <h5>Online Resource</h5>
        <h6>Membership</h6>
        <h6>Catalog</h6>
        <h6>Gift Card</h6>
      </div>
      <div className="footer-content">
        <h5>Services</h5>
        <h6>Shipping</h6>
        <h6>Order Tracking</h6>
        <h6>FAQ</h6>
      </div>
      <div>
        <div>
<h5>Stay In Touch</h5>
        <h6>Email:yofurni@gmail.com</h6>
        <div className="social">
          <FacebookIcon style={{ margin: "10px" }} />
          <TwitterIcon style={{ margin: "10px" }} />
          <InstagramIcon style={{ margin: "10px" }} />
        </div>
        </div>
        
      </div>
    </div>
  );
}
