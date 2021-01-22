import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="app-footer">
      <ul>
        <li className="about">
          © 2021 Nest Labs
          <div className="links">
            <a
              href="//nest.com/legal/privacy-policy-for-nest-web-sites/"
              title="Legal"
            >
              | Legal
            </a>
            <a href="//nest.com/privacy/" title="Privacy">
              &#160;| Privacy
            </a>
          </div>
          <div className="changCountry">
            <img
              className="img"
              src={require("../../assets/usa.svg").default}
            />
            <a
              className="changCountrys"
              href="//nest.com/choose-your-country/"
              title="Choose your country"
            >
              <b>| Change&#160;➤</b>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
