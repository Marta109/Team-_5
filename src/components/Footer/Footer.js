import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="app-footer">
      <ul className="links">
        <li className="about">
          © 2021 Nest Labs
          <li>
            <a
              className="links"
              href="//nest.com/legal/privacy-policy-for-nest-web-sites/"
              title="Legal"
            >
              | Legal
            </a>
          </li>
          <li>
            <a className="links" href="//nest.com/privacy/" title="Privacy">
              | Privacy
            </a>
          </li>
          <div className="changCountry">
            <img
              className="img"
              src={require("../../assets/usa.svg").default}
            />
            <a
              className="changCountrys"
              href="//nest.com/choose-your-country/"
              title="Choose your country"
            >Change&#160;
              <b>></b>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
