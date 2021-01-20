import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-txt">
        Nest.com has moved to the Google Store.
        <a
          className="h-a"
          href="https://store.google.com/us/category/google_nest?hl=en-US&GoogleNest"
        >
          &#160;Learn more &#160;
          <b>></b>
        </a>
      </div>
      <div className="app-navig">
        <div className="app-links">
          <li className="nav-links-list-item">
            <a
              className="app-links"
              href="//nest.com/support/"
              data-test="support"
            >
              Support
            </a>
          </li>
          <li className="login">
            {" "}
            <i className="far fa-user-circle"></i>
          </li>
          <button className="button">Sign in</button>
        </div>
      </div>
      <div>
        <a href="//nest.com" className="logo" title="Nest" itemprop="url">
          nest
        </a>
      </div>
    </div>
  );
};

export default Header;
